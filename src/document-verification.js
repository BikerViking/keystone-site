export function initDocumentVerification() {
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
  const resultStatusContainer = document.getElementById('result-status-container');
  const documentType = document.getElementById('document-type');
  const requirementsList = document.getElementById('requirements-list');
  const recommendations = document.getElementById('recommendations');
  const verifyAnotherBtn = document.getElementById('verify-another');

  if (
    !dropZone ||
    !fileInput ||
    !browseFilesBtn ||
    !uploadSection ||
    !verificationProgress ||
    !verificationResults ||
    !progressBar ||
    !progressPercentage ||
    !resultIcon ||
    !resultStatus ||
    !resultStatusContainer ||
    !documentType ||
    !requirementsList ||
    !recommendations ||
    !verifyAnotherBtn
  ) {
    return;
  }

  if (verificationProgress) {
    verificationProgress.classList.add('hidden');
  }
  if (verificationResults) {
    verificationResults.classList.add('hidden');
  }
  if (uploadSection) {
    uploadSection.classList.remove('hidden');
  }

  const documentVerificationTool = document.getElementById('document-verification-tool');
  if (documentVerificationTool) {
    documentVerificationTool.classList.remove('hidden');
  }

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

  fileInput.classList.add('hidden');

  browseFilesBtn.addEventListener('click', e => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      handleFile(fileInput.files[0]);
    }
  });

  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('border-charcoal', 'bg-lightgray', 'dark:bg-darkgray');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-charcoal', 'bg-lightgray', 'dark:bg-darkgray');
  });

  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('border-charcoal', 'bg-lightgray', 'dark:bg-darkgray');
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  dropZone.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });

  dropZone.addEventListener('click', () => {
    fileInput.click();
  });

  verifyAnotherBtn.addEventListener('click', () => {
    verificationResults.classList.add('hidden');
    uploadSection.classList.remove('hidden');
    fileInput.value = '';
  });

  function handleFile(file) {
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png'
    ];
    if (!validTypes.includes(file.type)) {
      const uploadError = document.getElementById('upload-error');
      if (uploadError) {
        uploadError.textContent = 'Please upload a valid document (PDF, DOC, DOCX, JPG, or PNG).';
        uploadError.classList.remove('hidden');
        uploadError.focus();
      }
      return;
    }

    uploadSection.classList.add('hidden');
    verificationProgress.classList.remove('hidden');
    resultStatusContainer.setAttribute('aria-busy', 'true');

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      progressPercentage.textContent = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          verificationProgress.classList.add('hidden');
          verificationResults.classList.remove('hidden');
          analyzeDocument(file);
        }, 500);
      }
    }, 100);
  }

  function analyzeDocument(file) {
    const fileName = file.name.toLowerCase();
    let documentCategory;
    let isValid = true;
    const issues = [];

    const resultStatusContainer = document.getElementById('result-status-container');

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

    documentType.textContent = documentCategory;
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

    resultStatusContainer.setAttribute('aria-busy', 'false');
  }
}
