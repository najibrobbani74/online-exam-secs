import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
// import { ClassesRepository } from './repository/classes.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([ClassesRepository])],
  controllers: [ClassesController],
  providers: [ClassesService]
})
export class ClassesModule {}
