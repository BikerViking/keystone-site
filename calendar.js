export function resetAppointmentForm() {
  const container = document.getElementById('appointment-details');
  container.textContent = '';
  const p = document.createElement('p');
  p.className = 'text-darkgray';
  p.textContent = 'No date and time selected';
  container.appendChild(p);
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
      calendarDaysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day';

      const daySpan = document.createElement('span');
      daySpan.textContent = day;
      dayElement.appendChild(daySpan);

      const today = new Date();
      const checkDate = new Date(year, month, day);

      if (checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        dayElement.classList.add('disabled');
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
      calendarDaysContainer.appendChild(emptyDay);
    }
  }

  function updateCalendarDisplay() {
    if (currentMonthElement) {
      currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }

    document.querySelectorAll('.calendar-day.selected').forEach(day => {
      day.classList.remove('selected');
    });

    if (timeSlots) {
      timeSlots.style.display = 'none';
    }

    if (appointmentDetails) {
      appointmentDetails.textContent = '';
      const label = document.createElement('p');
      label.className = 'font-medium text-charcoal';
      label.textContent = 'Selected Date:';
      const value = document.createElement('p');
      value.className = 'text-darkgray';
      value.textContent = 'No date selected';
      appointmentDetails.append(label, value);
    }

    if (submitAppointmentBtn) {
      submitAppointmentBtn.disabled = true;
    }
  }

  function selectDate(day, month, year, element) {
    document.querySelectorAll('.calendar-day.selected').forEach(d => {
      d.classList.remove('selected');
    });

    element.classList.add('selected');

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

        const timeSlot = document.createElement('button');
        timeSlot.type = 'button';
        timeSlot.className = 'time-slot';

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
    });

    element.classList.add('selected');

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
      appointmentDetails.textContent = '';
      const label = document.createElement('p');
      label.className = 'font-medium text-charcoal';
      label.textContent = 'Selected Appointment:';
      const value = document.createElement('p');
      value.className = 'text-darkgray';
      value.textContent = `${formattedDate} at ${formattedTime}`;
      appointmentDetails.append(label, value);
    }

    if (submitAppointmentBtn) {
      submitAppointmentBtn.disabled = false;
    }
  }
}
