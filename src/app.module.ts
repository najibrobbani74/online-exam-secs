import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClassesModule } from './classes/classes.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [UsersModule, AuthModule, ClassesModule, FormsModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
