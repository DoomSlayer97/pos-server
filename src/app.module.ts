import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AdminModule } from './modules/admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module'

@Module({
  imports: [
    DbModule,
    LoginModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
