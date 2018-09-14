import { observable, action } from 'mobx';

export default class ApiStore {
  @observable physicians = [];
  @observable appointments = [];

  @observable physicianId = '';
  @observable physicianEmail = '';
  @observable physicianName = '';

  constructor() {
    this.initialize();
  }

  @action async initialize() {
    const res = await fetch('http://localhost:4567/physicians');
    const physicians = await res.json();
    this.physicians = physicians.physicians;
    const firstPhysician = this.physicians[0]
    this.loadAppointments(
      firstPhysician.id,
      firstPhysician.email,
      `${firstPhysician.first_name} ${firstPhysician.last_name}`
    )
  }

  @action async loadAppointments(physicianId, email, name) {
    const res = await fetch(`http://localhost:4567/physicians/${physicianId}/appointments`);
    const appointments = await res.json();

    this.physicianId = physicianId;
    this.physicianEmail = email;
    this.physicianName = name;
    this.appointments = appointments.appointments;
  }
}
