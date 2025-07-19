import { initTheme } from './theme.js';
import { initCalendar, resetAppointmentForm } from './calendar.js';
import { initClientPortal } from './portal.js';

initTheme();

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
                        
                        // Announce success instead of using alert for better accessibility
                        announce('appointment-message', 'Thank you for scheduling your appointment! We will send a confirmation email shortly.');
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
                    // Generic success announcement for other forms
                    announce(`${form.id}-message`, 'Thank you for your message! We will contact you shortly.');
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
            else if (field.id === 'phone' && !/^[\d\s()\-+]{10,15}$/.test(field.value)) {
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
        

        // Announce status messages in dedicated live regions
        function announce(id, message) {
            const region = document.getElementById(id);
            if (region) {
                region.textContent = message;
                region.classList.remove('hidden');
                region.setAttribute('tabindex', '-1');
                region.focus();
            }
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
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        
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

        // Animation for fade-in elements and initialization hooks
        document.addEventListener('DOMContentLoaded', () => {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            // Check if IntersectionObserver is supported
            if ('IntersectionObserver' in window) {
                // Create an intersection observer
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove('opacity-0');
                            entry.target.classList.add('opacity-100');
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
                    element.classList.remove('opacity-0');
                    element.classList.add('opacity-100');
                });
            }
            
            // Initialize calendar
            initCalendar();
            
            // Initialize client portal
            initClientPortal();

            // Document verification tool
            initDocumentVerification();
        });
        
        
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
                verificationProgress.classList.add('hidden');
            }

            if (verificationResults) {
                verificationResults.classList.add('hidden');
            }

            if (uploadSection) {
                uploadSection.classList.remove('hidden');
            }
            
            // Show the verification tool when available
            const documentVerificationTool = document.getElementById('document-verification-tool');
            if (documentVerificationTool) {
                documentVerificationTool.classList.remove('hidden');
            }
            
            // Ensure drop zone classes are applied
            if (dropZone) {
                dropZone.classList.add(
                    'border-2',
                    'border-dashed',
                    'border-mediumgray',
                    'rounded-sm',
                    'p-8',
                    'text-center',
                    'cursor-pointer',
                    'transition-colors',
                    'duration-300',
                    'bg-white',
                    'min-h-[250px]',
                    'box-border',
                    'w-full'
                );
            }
            
            // Make sure the file input is hidden
            if (fileInput) {
                fileInput.classList.add('hidden');
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
                    dropZone.classList.add('border-charcoal', 'bg-lightgray', 'dark:bg-darkgray');
                });

                dropZone.addEventListener('dragleave', () => {
                    dropZone.classList.remove('border-charcoal', 'bg-lightgray', 'dark:bg-darkgray');
                });

                dropZone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    dropZone.classList.remove('border-charcoal', 'bg-lightgray', 'dark:bg-darkgray');

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
                        verificationResults.classList.add('hidden');
                    }

                    if (uploadSection) {
                        uploadSection.classList.remove('hidden');
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
                    const uploadError = document.getElementById('upload-error');
                    if (uploadError) {
                        uploadError.textContent = 'Please upload a valid document (PDF, DOC, DOCX, JPG, or PNG).';
                        uploadError.classList.remove('hidden');
                        uploadError.focus();
                    }
                    return;
                }
                
                // Show progress
                if (uploadSection) {
                    uploadSection.classList.add('hidden');
                }

                if (verificationProgress) {
                    verificationProgress.classList.remove('hidden');
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
                                verificationProgress.classList.add('hidden');
                            }

                            if (verificationResults) {
                                verificationResults.classList.remove('hidden');
                            }
                            
                            analyzeDocument(file);
                        }, 500);
                    }
                }, 100);
                
            }
            
            // Basic client-side document analysis
            function analyzeDocument(file) {
                
                const fileName = file.name.toLowerCase();
                let documentCategory;
                let isValid = true;
                const issues = [];
                
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
                
                if (file.size > 5 * 1024 * 1024) {
                    isValid = false;
                    issues.push('File exceeds 5MB size limit');
                }

                if (documentCategory === 'General Document') {
                    isValid = false;
                    issues.push('Unrecognized document type; please include a notarial certificate and signature line');
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
        

        
