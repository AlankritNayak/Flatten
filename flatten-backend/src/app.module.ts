import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import {QrCodeModule} from "./qr-code/qr-code.module";

@Module({
  imports: [QrCodeModule],
=======
import { QrCodeModule } from "./qr-code/qr-code.module";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    QrCodeModule
  ],
>>>>>>> parent of b51411b... Merge branch 'dev-backend-Driton' of https://github.com/Platri/Flatten into dev-backend-Driton
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
