import { Module } from '@nestjs/common';
import { HealthController } from "./health.controller";
import { HealthCheck, TerminusModule } from "@nestjs/terminus";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [
    TerminusModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'yijyo',
      password: '1234',
      database: 'health_api',
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [
    HealthController,
    UserController,
  ],
  providers: [
    UserService,
    UserRepository
  ]
})

export class CommonModule {
}