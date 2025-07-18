export function resetAppointmentForm() {
  document.getElementById('appointment-details').innerHTML = '<p class="text-darkgray">No date and time selected</p>';
  document.getElementById('submit-appointment').disabled = true;
  document.getElementById('time-slots').classList.add('hidden');

  document.querySelectorAll('.calendar-day.selected').forEach(day => {
    day.classList.remove('selected', 'bg-charcoal', 'text-white');
  });
  document.querySelectorAll('.time-slot.selected').forEach(slot => {
    slot.classList.remove('selected', 'bg-charcoal', 'text-white');
  });
}

export function initCalendar() {
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const currentMonthElement = document.getElementById('current-month');
  const calendarDaysContainer = document.getElementById('calendar-days');
  const timeSlots = document.getElementById('time-slots');
  const timeSlotsGrid = document.getElementById('time-slots-grid');
  const selectedDateElement = document.getElementById('selected-date');
  const appointmentDetails = document.getElementById('appointment-details');
  const submitAppointmentBtn = document.getElementById('submit-appointment');

  if (!document.querySelector('#contact')) return;
  if (!currentMonthElement || !calendarDaysContainer) return;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  generateCalendarDays(currentMonth, currentYear);

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

  function generateCalendarDays(month, year) {
    if (!calendarDaysContainer) return;
    calendarDaysContainer.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.className = 'calendar-day empty';
      emptyDay.style.height = '40px';
      calendarDaysContainer.appendChild(emptyDay);
    }

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

      const daySpan = document.createElement('span');
      daySpan.textContent = day;
      dayElement.appendChild(daySpan);

      const today = new Date();
      const checkDate = new Date(year, month, day);

      if (checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        dayElement.classList.add('cursor-not-allowed');
        dayElement.style.backgroundColor = '#f0f0f0';
        dayElement.style.color = '#AAAAAA';
      } else {
        dayElement.addEventListener('click', function () {
          selectDate(day, month, year, this);
        });
      }

      calendarDaysContainer.appendChild(dayElement);
    }

    const totalCells = firstDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let i = 0; i < remainingCells; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.className = 'calendar-day empty';
      emptyDay.style.height = '40px';
      calendarDaysContainer.appendChild(emptyDay);
    }
  }

  function updateCalendarDisplay() {
    if (currentMonthElement) {
      currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }

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

  function selectDate(day, month, year, element) {
    document.querySelectorAll('.calendar-day.selected').forEach(d => {
      d.classList.remove('selected');
      d.style.backgroundColor = 'white';
      d.style.color = '#333333';
    });

    element.classList.add('selected');
    element.style.backgroundColor = '#333333';
    element.style.color = 'white';
    element.style.borderColor = '#333333';

    const selectedDate = new Date(year, month, day);

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    if (selectedDateElement) {
      selectedDateElement.textContent = formattedDate;
    }

    if (timeSlots) {
      timeSlots.style.display = 'block';
    }

    generateTimeSlots(selectedDate);
  }

  function generateTimeSlots(date) {
    if (!timeSlotsGrid) return;
    timeSlotsGrid.innerHTML = '';
    const isSaturday = date.getDay() === 6;
    let startHour = 9;
    let endHour = isSaturday ? 13 : 17;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const slotWrapper = document.createElement('div');
        slotWrapper.className = 'time-slot-wrapper';
        slotWrapper.style.padding = '0';
        slotWrapper.style.margin = '0';

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

        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
        const displayMinute = minute === 0 ? '00' : minute;

        timeSlot.textContent = `${displayHour}:${displayMinute}${period}`;
        timeSlot.addEventListener('click', () => selectTimeSlot(timeSlot, date, hour, minute));

        slotWrapper.appendChild(timeSlot);
        timeSlotsGrid.appendChild(slotWrapper);
      }
    }
  }

  function selectTimeSlot(element, date, hour, minute) {
    document.querySelectorAll('.time-slot').forEach(slot => {
      slot.classList.remove('selected');
      slot.style.backgroundColor = 'white';
      slot.style.color = '#333333';
      slot.style.borderColor = '#AAAAAA';
    });

    element.classList.add('selected');
    element.style.backgroundColor = '#333333';
    element.style.color = 'white';
    element.style.borderColor = '#333333';

    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    const displayMinute = minute === 0 ? '00' : minute;
    const formattedTime = `${displayHour}:${displayMinute} ${period}`;

    if (appointmentDetails) {
      appointmentDetails.innerHTML = `
            <p class="font-medium text-charcoal">Selected Appointment:</p>
            <p class="text-darkgray">${formattedDate} at ${formattedTime}</p>
        `;
    }

    if (submitAppointmentBtn) {
      submitAppointmentBtn.disabled = false;
      submitAppointmentBtn.style.opacity = '1';
      submitAppointmentBtn.style.cursor = 'pointer';
    }
  }
}
