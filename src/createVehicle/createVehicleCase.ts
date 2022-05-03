import { Vehicle } from '@/entities/Vehicle';
import { IVehicle } from '@/repositories/IVehicle';
import { CreateVehicleDTO } from './createVehicleDTO';

export default class CreateVehicle {
  constructor(private vehicleRepository: IVehicle) {}

  async execute(data: CreateVehicleDTO) {
    const vehicleExist = await this.vehicleRepository.findById(data.id);

    if (vehicleExist) {
      throw new Error('Vehicle exist in database');
    }

    const vehicle = new Vehicle(data);

    await this.vehicleRepository.save(vehicle);
  }
}
