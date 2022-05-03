import { Vehicle } from '@/entities/Vehicle';

export interface IVehicle {
  findById(id: number): Promise<Vehicle>;
  save(vehicle: Vehicle): Promise<void>;
}
