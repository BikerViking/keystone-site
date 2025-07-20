import { initTheme } from './theme.js';
import { initCalendar, resetAppointmentForm } from './calendar.js';
import { initClientPortal } from './portal.js';

import { initDocumentVerification } from './src/document-verification.js';
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
        document.querySelectorAll('form[data-form="validate"]').forEach(form => {
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
        
        
