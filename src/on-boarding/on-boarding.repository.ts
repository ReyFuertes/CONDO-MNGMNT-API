import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Onboarding } from './on-boarding.entity';

@EntityRepository(Onboarding)
export class OnboardingRepository extends Repository<Onboarding> {

}