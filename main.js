        const toggleTheme = (btn, sunIcon, moonIcon) => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if (sunIcon && moonIcon) {
                sunIcon.classList.toggle('hidden', !isDark);
                moonIcon.classList.toggle('hidden', isDark);
            }
            if (btn) {
                btn.setAttribute('aria-pressed', String(isDark));
            }
        };

        const initTheme = (btn, sunIcon, moonIcon) => {
            const stored = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (stored === 'dark' || (!stored && prefersDark)) {
                document.documentElement.classList.add('dark');
                if (sunIcon && moonIcon) {
                    sunIcon.classList.remove('hidden');
                    moonIcon.classList.add('hidden');
                }
                if (btn) {
                    btn.setAttribute('aria-pressed', 'true');
                }
            } else if (btn) {
                btn.setAttribute('aria-pressed', 'false');
            }
            if (btn) {
                btn.addEventListener('click', () => toggleTheme(btn, sunIcon, moonIcon));
            }
        };

        initTheme(
            document.getElementById('theme-toggle'),
            document.getElementById('theme-sun'),
            document.getElementById('theme-moon')
        );

        // Mobile menu toggle
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Check if elements exist before accessing them
        if (menuButton && mobileMenu) {
            // Hide mobile menu by default
            mobileMenu.classList.add('hidden');

            menuButton.addEventListener('click', () => {
                const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
                menuButton.setAttribute('aria-expanded', String(!isExpanded));
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Add touch event handling for mobile devices
        document.addEventListener('touchstart', function() {}, {passive: true});
        
        // Improve keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Add escape key handler for modals
            if (e.key === 'Escape') {
                // Close client portal modal if open
                const clientPortalModal = document.getElementById('client-portal-modal');
                if (clientPortalModal && !clientPortalModal.classList.contains('hidden')) {
                    clientPortalModal.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            }
        });

        // Form validation and submission with API integration hooks
        document.querySelectorAll('form').forEach(form => {
            // Add validation listeners to required fields
            form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
                field.addEventListener('blur', () => {
                    validateField(field);
                });
                
                field.addEventListener('input', () => {
                    // Clear error state as user types
                    field.classList.remove('border-red-500');
                    if (field.nextElementSibling && field.nextElementSibling.classList.contains('text-red-600')) {
                        field.nextElementSibling.remove();
                    }
                });
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Validate all required fields before submission
                let isValid = true;
                form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
                    if (!validateField(field)) {
                        isValid = false;
                    }
                });
                
                if (!isValid) {
                    const formFeedback = document.getElementById('form-feedback');
                    if (formFeedback) {
                        formFeedback.textContent = 'Please fill in all required fields correctly.';
                        formFeedback.classList.remove('hidden');
                    }
                    return;
                }
                
                if (form.id === 'appointment-form') {
                    // Get form data
                    const formData = {
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone').value,
                        service: document.getElementById('service').value,
                        appointmentDetails: document.getElementById('appointment-details').innerText,
                        message: document.getElementById('message').value
                    };
                    
                    
                    // Show loading state
                    const submitBtn = document.getElementById('submit-appointment');
                    const loadingSpinner = document.getElementById('submit-loading');
                    if (submitBtn && loadingSpinner) {
                        submitBtn.disabled = true;
                        loadingSpinner.classList.remove('hidden');
                    }
                    
                    // Simulate API call delay
                    setTimeout(() => {
                        // Hide loading state
                        if (submitBtn && loadingSpinner) {
                            submitBtn.disabled = false;
                            loadingSpinner.classList.add('hidden');
                        }
                        
                        // For demo purposes:
                        alert('Thank you for scheduling your appointment! We will send a confirmation email shortly.');
                        form.reset();
                        resetAppointmentForm();
                    }, 1500);
                } else if (form.id === 'login-form') {
                    
                    // For demo, continue with the existing functionality
                    const email = document.getElementById('email-login').value;
                    const firstName = email.split('@')[0];
                    document.getElementById('login-section').classList.add('hidden');
                    document.getElementById('portal-section').classList.remove('hidden');
                    document.getElementById('user-name').textContent = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                } else {
                    alert('Thank you for your message! We will contact you shortly.');
                    form.reset();
                }
            });
        });
        
        // Field validation function
        function validateField(field) {
            let isValid = true;
            let errorMessage = '';
            
            // Remove any existing error message
            if (field.nextElementSibling && field.nextElementSibling.classList.contains('text-red-600')) {
                field.nextElementSibling.remove();
            }
            
            // Check if empty
            if (field.value.trim() === '') {
                isValid = false;
                errorMessage = 'This field is required';
            } 
            // Email validation
            else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            // Phone validation
            else if (field.id === 'phone' && !/^[\d\s\(\)\-\+]{10,15}$/.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
            
            // Show error if invalid
            if (!isValid) {
                field.classList.add('border-red-500');
                const errorElement = document.createElement('p');
                errorElement.className = 'text-red-600 text-xs mt-1';
                errorElement.textContent = errorMessage;
                field.parentNode.insertBefore(errorElement, field.nextSibling);
            } else {
                field.classList.remove('border-red-500');
            }
            
            return isValid;
        }
        
        // Helper function to reset appointment form
        function resetAppointmentForm() {
            document.getElementById('appointment-details').innerHTML = '<p class="text-darkgray">No date and time selected</p>';
            document.getElementById('submit-appointment').disabled = true;
            document.getElementById('time-slots').classList.add('hidden');
            
            // Clear selected states
            document.querySelectorAll('.calendar-day.selected').forEach(day => {
                day.classList.remove('selected', 'bg-charcoal', 'text-white');
            });
            document.querySelectorAll('.time-slot.selected').forEach(slot => {
                slot.classList.remove('selected', 'bg-charcoal', 'text-white');
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    // Get header height for offset with additional padding for better visibility
                    const headerHeight = document.querySelector('nav').offsetHeight + 20 || 20;
                    
                    // Calculate the target position
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && mobileMenu.style.display !== 'none') {
                        mobileMenu.style.display = 'none';
                        
                        // Update menu button state
                        const menuButton = document.getElementById('menu-button');
                        if (menuButton) {
                            menuButton.setAttribute('aria-expanded', 'false');
                        }
                    }
                    
                    // Update URL hash after scrolling completes
                    setTimeout(() => {
                        history.pushState(null, null, targetId);
                    }, 1000);
                }
            });
        });

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const arrow = question.querySelector('.faq-arrow');
                
                // Toggle answer visibility
                answer.classList.toggle('hidden');
                
                // Rotate arrow
                if (answer.classList.contains('hidden')) {
                    arrow.classList.remove('rotate-180');
                } else {
                    arrow.classList.add('rotate-180');
                }
            });
        });

        // Animation for fade-in elements
        document.addEventListener('DOMContentLoaded', () => {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            // Check if IntersectionObserver is supported
            if ('IntersectionObserver' in window) {
                // Create an intersection observer
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1
                });
                
                // Observe each fade element
                fadeElements.forEach(element => {
                    observer.observe(element);
                });
            } else {
                // Fallback for browsers that don't support IntersectionObserver
                fadeElements.forEach(element => {
                    element.style.opacity = '1';
                });
            }
            
            // Initialize calendar
            initCalendar();
            
            // Initialize client portal
            initClientPortal();
        });
        
        // Client Portal functionality
        function initClientPortal() {
            const clientLoginBtn = document.getElementById('client-login-btn');
            const clientPortalModal = document.getElementById('client-portal-modal');
            const closeModalBtn = document.getElementById('close-modal');
            const loginSection = document.getElementById('login-section');
            const registerSection = document.getElementById('register-section');
            const portalSection = document.getElementById('portal-section');
            const showRegisterBtn = document.getElementById('show-register');
            const showLoginBtn = document.getElementById('show-login');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const logoutBtn = document.getElementById('logout-btn');
            const scheduleNewBtn = document.getElementById('schedule-new');
            const uploadDocumentBtn = document.getElementById('upload-document');
            const userName = document.getElementById('user-name');
            
            // Open modal
            clientLoginBtn.addEventListener('click', () => {
                clientPortalModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
            
            // Close modal
            closeModalBtn.addEventListener('click', () => {
                clientPortalModal.classList.add('hidden');
                document.body.style.overflow = ''; // Re-enable scrolling
                // Reset form state
                loginSection.classList.remove('hidden');
                registerSection.classList.add('hidden');
                portalSection.classList.add('hidden');
                loginForm.reset();
                registerForm.reset();
            });
            
            // Close modal when clicking outside
            clientPortalModal.addEventListener('click', (e) => {
                if (e.target === clientPortalModal) {
                    clientPortalModal.classList.add('hidden');
                    document.body.style.overflow = '';
                    // Reset form state
                    loginSection.classList.remove('hidden');
                    registerSection.classList.add('hidden');
                    portalSection.classList.add('hidden');
                    loginForm.reset();
                    registerForm.reset();
                }
            });
            
            // Show register form
            showRegisterBtn.addEventListener('click', (e) => {
                e.preventDefault();
                loginSection.classList.add('hidden');
                registerSection.classList.remove('hidden');
            });
            
            // Show login form
            showLoginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                registerSection.classList.add('hidden');
                loginSection.classList.remove('hidden');
            });
            
            // Login form submission
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Demo login - in a real app, this would validate credentials with a server
                const email = document.getElementById('email-login').value;
                const firstName = email.split('@')[0]; // Simple demo to extract name from email
                
                // Show portal section
                loginSection.classList.add('hidden');
                portalSection.classList.remove('hidden');
                
                // Set user name
                userName.textContent = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            });
            
            // Register form submission
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Demo registration - in a real app, this would send data to a server
                const firstName = document.getElementById('first-name').value;
                
                // Show portal section
                registerSection.classList.add('hidden');
                portalSection.classList.remove('hidden');
                
                // Set user name
                userName.textContent = firstName;
            });
            
            // Logout
            logoutBtn.addEventListener('click', () => {
                portalSection.classList.add('hidden');
                loginSection.classList.remove('hidden');
                loginForm.reset();
                
                // In a real app, this would clear session data
            });
            
            // Schedule new appointment
            scheduleNewBtn.addEventListener('click', () => {
                clientPortalModal.classList.add('hidden');
                document.body.style.overflow = '';
                
                // Smooth scroll to contact section
                const contactSection = document.querySelector('#contact');
                window.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: 'smooth'
                });
            });
            
            // Upload document
            uploadDocumentBtn.addEventListener('click', () => {
                alert('Document upload feature would be integrated with a secure file storage system.');
                // In a real app, this would open a file picker and upload to secure storage
            });
        }
        
        // Document Pre-Verification Tool functionality
        function initDocumentVerification() {
            const dropZone = document.getElementById('drop-zone');
            const fileInput = document.getElementById('file-input');
            const browseFilesBtn = document.getElementById('browse-files');
            const uploadSection = document.getElementById('upload-section');
            const verificationProgress = document.getElementById('verification-progress');
            const verificationResults = document.getElementById('verification-results');
            const progressBar = document.getElementById('progress-bar');
            const progressPercentage = document.getElementById('progress-percentage');
            const resultStatusContainer = document.getElementById('result-status-container');
            const resultIcon = document.getElementById('result-icon');
            const resultStatus = document.getElementById('result-status');
            const documentType = document.getElementById('document-type');
            const requirementsList = document.getElementById('requirements-list');
            const recommendations = document.getElementById('recommendations');
            const verifyAnotherBtn = document.getElementById('verify-another');
            
            // If any element doesn't exist, return early
            if (!dropZone || !fileInput || !browseFilesBtn) {
                return;
            }
            
            // Make sure all elements are properly styled
            if (verificationProgress) {
                verificationProgress.style.display = 'none';
            }
            
            if (verificationResults) {
                verificationResults.style.display = 'none';
            }
            
            if (uploadSection) {
                uploadSection.style.display = 'block';
            }
            
            // Initialize the document verification tool
            document.addEventListener('DOMContentLoaded', function() {
                const documentVerificationTool = document.getElementById('document-verification-tool');
                if (documentVerificationTool) {
                    documentVerificationTool.style.display = 'block';
                }
            });
            
            // Make sure the drop zone is visible and properly styled
            if (dropZone) {
                dropZone.style.border = '2px dashed #AAAAAA';
                dropZone.style.borderRadius = '4px';
                dropZone.style.padding = '2rem';
                dropZone.style.textAlign = 'center';
                dropZone.style.cursor = 'pointer';
                dropZone.style.backgroundColor = '#ffffff';
                dropZone.style.transition = 'border-color 0.3s ease';
            }
            
            // Make sure the file input is hidden
            if (fileInput) {
                fileInput.style.display = 'none';
            }
            
            // Click browse files button
            if (browseFilesBtn) {
                browseFilesBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (fileInput) fileInput.click();
                });
            }
            
            // File input change
            if (fileInput) {
                fileInput.addEventListener('change', () => {
                    if (fileInput.files.length > 0) {
                        handleFile(fileInput.files[0]);
                    }
                });
            }
            
            // Drag and drop functionality
            if (dropZone) {
                dropZone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    dropZone.style.borderColor = '#333333';
                    dropZone.style.backgroundColor = '#f9f9f9';
                });
                
                dropZone.addEventListener('dragleave', () => {
                    dropZone.style.borderColor = '#AAAAAA';
                    dropZone.style.backgroundColor = '#ffffff';
                });
                
                dropZone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    dropZone.style.borderColor = '#AAAAAA';
                    dropZone.style.backgroundColor = '#ffffff';
                    
                    if (e.dataTransfer.files.length > 0) {
                        handleFile(e.dataTransfer.files[0]);
                    }
                });
                
                // Add keyboard support for drop zone
                dropZone.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (fileInput) fileInput.click();
                    }
                });
                
                // Add click support for drop zone
                dropZone.addEventListener('click', () => {
                    if (fileInput) fileInput.click();
                });
            }
            
            // Verify another document button
            if (verifyAnotherBtn) {
                verifyAnotherBtn.addEventListener('click', () => {
                    if (verificationResults) {
                        verificationResults.style.display = 'none';
                    }
                    
                    if (uploadSection) {
                        uploadSection.style.display = 'block';
                    }
                    
                    if (fileInput) {
                        fileInput.value = '';
                    }
                });
            }
            
            // Handle file upload and verification
            function handleFile(file) {
                // Check file type
                const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
                if (!validTypes.includes(file.type)) {
                    alert('Please upload a valid document (PDF, DOC, DOCX, JPG, or PNG).');
                    return;
                }
                
                // Show progress
                if (uploadSection) {
                    uploadSection.style.display = 'none';
                }
                
                if (verificationProgress) {
                    verificationProgress.style.display = 'block';
                }
                
                // Simulate progress (in a real app, this would be actual file upload and analysis)
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 5;
                    
                    if (progressBar) {
                        progressBar.style.width = `${progress}%`;
                    }
                    
                    if (progressPercentage) {
                        progressPercentage.textContent = `${progress}%`;
                    }
                    
                    if (progress >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            if (verificationProgress) {
                                verificationProgress.style.display = 'none';
                            }
                            
                            if (verificationResults) {
                                verificationResults.style.display = 'block';
                            }
                            
                            analyzeDocument(file);
                        }, 500);
                    }
                }, 100);
                
            }
            
            // Analyze document (simulated)
            function analyzeDocument(file) {
                // In a real app, this would send the file to a server for analysis
                // For demo purposes, we'll simulate different results based on file name
                
                const fileName = file.name.toLowerCase();
                let documentCategory;
                let isValid = true;
                let issues = [];
                
                // Announce to screen readers that analysis is complete
                const resultStatusContainer = document.getElementById('result-status-container');
                resultStatusContainer.setAttribute('aria-busy', 'false');
                
                // Determine document type based on filename
                if (fileName.includes('power') || fileName.includes('attorney')) {
                    documentCategory = 'Power of Attorney';
                } else if (fileName.includes('deed') || fileName.includes('title') || fileName.includes('property')) {
                    documentCategory = 'Real Estate Document';
                } else if (fileName.includes('will') || fileName.includes('testament')) {
                    documentCategory = 'Last Will and Testament';
                } else if (fileName.includes('affidavit')) {
                    documentCategory = 'Affidavit';
                } else {
                    documentCategory = 'General Document';
                }
                
                // Simulate random issues
                if (Math.random() > 0.7) {
                    isValid = false;
                    issues.push('Missing signature line for notary');
                }
                
                if (Math.random() > 0.8) {
                    isValid = false;
                    issues.push('No space for notary seal');
                }
                
                if (Math.random() > 0.9) {
                    isValid = false;
                    issues.push('Missing notarial certificate language');
                }
                
                // Display results
                documentType.textContent = documentCategory;
                
                // Set requirements based on document type
                requirementsList.innerHTML = '';
                let reqs = [];
                
                switch (documentCategory) {
                    case 'Power of Attorney':
                        reqs = [
                            'Valid government-issued photo ID',
                            'Original document with signature line',
                            'All signers must appear in person',
                            'Witness(es) may be required depending on state law'
                        ];
                        break;
                    case 'Real Estate Document':
                        reqs = [
                            'Valid government-issued photo ID for all signers',
                            'Original document with all pages',
                            'All signers must appear in person',
                            'Proper notarial certificate or acknowledgment'
                        ];
                        break;
                    case 'Last Will and Testament':
                        reqs = [
                            'Valid government-issued photo ID',
                            'Original document with signature line',
                            'Witnesses (typically 2) must be present',
                            'Self-proving affidavit recommended'
                        ];
                        break;
                    default:
                        reqs = [
                            'Valid government-issued photo ID',
                            'Original document with signature line',
                            'All signers must appear in person'
                        ];
                }
                
                reqs.forEach(req => {
                    const li = document.createElement('li');
                    li.textContent = req;
                    requirementsList.appendChild(li);
                });
                
                // Set recommendations
                if (isValid) {
                    resultStatusContainer.className = 'p-4 rounded-sm mb-4 bg-green-100';
                    resultIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />';
                    resultIcon.classList.add('text-green-600');
                    resultStatus.textContent = 'Document Ready for Notarization';
                    resultStatus.classList.add('text-green-800');
                    
                    recommendations.innerHTML = `
                        <p class="mb-2">Your document appears to be ready for notarization. Please bring the following to your appointment:</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Original document (all pages)</li>
                            <li>Valid government-issued photo ID</li>
                            <li>Any witnesses required for your document type</li>
                        </ul>
                    `;
                } else {
                    resultStatusContainer.className = 'p-4 rounded-sm mb-4 bg-yellow-100';
                    resultIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />';
                    resultIcon.classList.add('text-yellow-600');
                    resultStatus.textContent = 'Document Needs Attention';
                    resultStatus.classList.add('text-yellow-800');
                    
                    let issuesHtml = '';
                    issues.forEach(issue => {
                        issuesHtml += `<li>${issue}</li>`;
                    });
                    
                    recommendations.innerHTML = `
                        <p class="mb-2">Your document needs some adjustments before notarization:</p>
                        <ul class="list-disc pl-5 space-y-1 text-yellow-800">
                            ${issuesHtml}
                        </ul>
                        <p class="mt-2">We recommend consulting with our notary professionals to ensure your document meets all requirements.</p>
                    `;
                }
                
            }
        }
        
        // Initialize document verification on page load
        document.addEventListener('DOMContentLoaded', () => {
            initDocumentVerification();
        });
        

        
        // Calendar functionality
        function initCalendar() {
            const currentDate = new Date();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            
            // Get DOM elements
            const prevMonthBtn = document.getElementById('prev-month');
            const nextMonthBtn = document.getElementById('next-month');
            const currentMonthElement = document.getElementById('current-month');
            const calendarDaysContainer = document.getElementById('calendar-days');
            const timeSlots = document.getElementById('time-slots');
            const timeSlotsGrid = document.getElementById('time-slots-grid');
            const selectedDateElement = document.getElementById('selected-date');
            const appointmentDetails = document.getElementById('appointment-details');
            const submitAppointmentBtn = document.getElementById('submit-appointment');
            
            // Check if calendar section exists at all
            if (!document.querySelector('#contact')) {
                return;
            }
            
            // Check if required elements exist
            if (!currentMonthElement || !calendarDaysContainer) {
                return;
            }
            
            // Month names
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            
            // Set current month display
            if (currentMonthElement) {
                currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
            }
            
            // Generate calendar days for current month
            generateCalendarDays(currentMonth, currentYear);
            
            // Event listeners for month navigation
            if (prevMonthBtn) {
                prevMonthBtn.addEventListener('click', () => {
                    currentMonth--;
                    if (currentMonth < 0) {
                        currentMonth = 11;
                        currentYear--;
                    }
                    updateCalendarDisplay();
                    generateCalendarDays(currentMonth, currentYear);
                });
            }
            
            if (nextMonthBtn) {
                nextMonthBtn.addEventListener('click', () => {
                    currentMonth++;
                    if (currentMonth > 11) {
                        currentMonth = 0;
                        currentYear++;
                    }
                    updateCalendarDisplay();
                    generateCalendarDays(currentMonth, currentYear);
                });
            }
            
            // Generate calendar days for a given month and year
            function generateCalendarDays(month, year) {
                if (!calendarDaysContainer) return;
                
                // Clear existing calendar days
                calendarDaysContainer.innerHTML = '';
                
                // Get first day of month and total days in month
                const firstDay = new Date(year, month, 1).getDay();
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                
                // Add empty cells for days before the first day of the month
                for (let i = 0; i < firstDay; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.className = 'calendar-day empty';
                    emptyDay.style.height = '40px';
                    calendarDaysContainer.appendChild(emptyDay);
                }
                
                // Add days of the month
                for (let day = 1; day <= daysInMonth; day++) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day';
                    dayElement.style.backgroundColor = 'white';
                    dayElement.style.height = '40px';
                    dayElement.style.display = 'flex';
                    dayElement.style.alignItems = 'center';
                    dayElement.style.justifyContent = 'center';
                    dayElement.style.cursor = 'pointer';
                    dayElement.style.border = '1px solid #AAAAAA';
                    dayElement.style.borderRadius = '2px';
                    
                    // Add day number
                    const daySpan = document.createElement('span');
                    daySpan.textContent = day;
                    dayElement.appendChild(daySpan);
                    
                    // Check if this day is in the past
                    const currentDate = new Date();
                    const checkDate = new Date(year, month, day);
                    
                    if (checkDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) {
                        dayElement.classList.add('cursor-not-allowed');
                        dayElement.style.backgroundColor = '#f0f0f0';
                        dayElement.style.color = '#AAAAAA';
                    } else {
                        // Add click handler for future dates
                        dayElement.addEventListener('click', function() {
                            selectDate(day, month, year, this);
                        });
                    }
                    
                    // Add to calendar
                    calendarDaysContainer.appendChild(dayElement);
                }
                
                // Add empty cells to complete the grid if needed
                const totalCells = firstDay + daysInMonth;
                const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
                
                for (let i = 0; i < remainingCells; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.className = 'calendar-day empty';
                    emptyDay.style.height = '40px';
                    calendarDaysContainer.appendChild(emptyDay);
                }
            }
            
            // Update calendar display when month changes
            function updateCalendarDisplay() {
                if (currentMonthElement) {
                    currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
                }
                
                // Reset any selected date
                document.querySelectorAll('.calendar-day.selected').forEach(day => {
                    day.classList.remove('selected');
                    day.style.backgroundColor = 'white';
                    day.style.color = '#333333';
                });
                
                if (timeSlots) {
                    timeSlots.style.display = 'none';
                }
                
                if (appointmentDetails) {
                    appointmentDetails.innerHTML = '<p class="font-medium text-charcoal">Selected Date:</p><p class="text-darkgray">No date selected</p>';
                }
                
                if (submitAppointmentBtn) {
                    submitAppointmentBtn.disabled = true;
                    submitAppointmentBtn.style.opacity = '0.7';
                    submitAppointmentBtn.style.cursor = 'not-allowed';
                }
            }
            
            // Select date function
            function selectDate(day, month, year, element) {
                // Remove selected class from all days
                document.querySelectorAll('.calendar-day.selected').forEach(day => {
                    day.classList.remove('selected');
                    day.style.backgroundColor = 'white';
                    day.style.color = '#333333';
                });
                
                // Add selected class to clicked day
                element.classList.add('selected');
                element.style.backgroundColor = '#333333';
                element.style.color = 'white';
                element.style.borderColor = '#333333';
                
                // Create date object for the selected date
                const selectedDate = new Date(year, month, day);
                
                // Format date for display
                const formattedDate = selectedDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                });
                
                // Update selected date display
                if (selectedDateElement) {
                    selectedDateElement.textContent = formattedDate;
                }
                
                // Show time slots
                if (timeSlots) {
                    timeSlots.style.display = 'block';
                }
                
                // Generate time slots for the selected date
                generateTimeSlots(selectedDate);
            }
            
            // Generate time slots function
            function generateTimeSlots(date) {
                // Clear existing time slots
                if (!timeSlotsGrid) {
                    return;
                }
                
                timeSlotsGrid.innerHTML = '';
                
                // Check if it's a Saturday
                const isSaturday = date.getDay() === 6;
                
                // Define available time slots
                let startHour = 9; // 9 AM
                let endHour = isSaturday ? 13 : 17; // 1 PM for Saturday, 5 PM for weekdays
                
                // Generate time slots in 30-minute intervals
                for (let hour = startHour; hour < endHour; hour++) {
                    for (let minute = 0; minute < 60; minute += 30) {
                        // Create wrapper div for the time slot
                        const slotWrapper = document.createElement('div');
                        slotWrapper.className = 'time-slot-wrapper';
                        slotWrapper.style.padding = '0';
                        slotWrapper.style.margin = '0';
                        
                        // Create time slot element
                        const timeSlot = document.createElement('button');
                        timeSlot.type = 'button';
                        timeSlot.className = 'time-slot';
                        timeSlot.style.fontSize = '0.9rem';
                        timeSlot.style.backgroundColor = 'white';
                        timeSlot.style.border = '1px solid #AAAAAA';
                        timeSlot.style.borderRadius = '2px';
                        timeSlot.style.padding = '8px';
                        timeSlot.style.textAlign = 'center';
                        timeSlot.style.width = '100%';
                        timeSlot.style.boxSizing = 'border-box';
                        timeSlot.style.display = 'block';
                        timeSlot.style.cursor = 'pointer';
                        timeSlot.style.margin = '0';
                        
                        // Format time (12-hour format with AM/PM)
                        const period = hour >= 12 ? 'PM' : 'AM';
                        const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
                        const displayMinute = minute === 0 ? '00' : minute;
                        
                        timeSlot.textContent = `${displayHour}:${displayMinute} ${period}`;
                        
                        // Add event listener
                        timeSlot.addEventListener('click', () => selectTimeSlot(timeSlot, date, hour, minute));
                        
                        // Add to wrapper
                        slotWrapper.appendChild(timeSlot);
                        
                        // Add to grid
                        timeSlotsGrid.appendChild(slotWrapper);
                    }
                }
            }
            
            // Select time slot function
            function selectTimeSlot(element, date, hour, minute) {
                // Remove selected class from all time slots
                document.querySelectorAll('.time-slot').forEach(slot => {
                    slot.classList.remove('selected');
                    slot.style.backgroundColor = 'white';
                    slot.style.color = '#333333';
                    slot.style.borderColor = '#AAAAAA';
                });
                
                // Add selected class to clicked time slot
                element.classList.add('selected');
                element.style.backgroundColor = '#333333';
                element.style.color = 'white';
                element.style.borderColor = '#333333';
                
                // Format date and time for display
                const formattedDate = date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                });
                
                // Format time (12-hour format with AM/PM)
                const period = hour >= 12 ? 'PM' : 'AM';
                const displayHour = hour > 12 ? hour - 12 : hour;
                const displayMinute = minute === 0 ? '00' : minute;
                const formattedTime = `${displayHour}:${displayMinute} ${period}`;
                
                // Update appointment details
                if (appointmentDetails) {
                    appointmentDetails.innerHTML = `
                        <p class="font-medium text-charcoal">Selected Appointment:</p>
                        <p class="text-darkgray">${formattedDate} at ${formattedTime}</p>
                    `;
                }
                
                // Enable submit button
                if (submitAppointmentBtn) {
                    submitAppointmentBtn.disabled = false;
                    submitAppointmentBtn.style.opacity = '1';
                    submitAppointmentBtn.style.cursor = 'pointer';
                }
            }
