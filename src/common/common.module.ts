import { Module } from '@nestjs/common';
import { HealthController } from "./health.controller";
import { HealthCheck, TerminusModule } from "@nestjs/terminus";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

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
      synchronize: true, // 개발 환경에서만 true로 설정
    }),
    UserModule,
  ],
  controllers: [
    HealthController,

  ],
  providers: [UserService]
})

export class CommonModule {
}