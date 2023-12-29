import { Module , MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService } from './prisma.service'
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middleware/auth/auth.middleware';

@Module({
  imports: [UsersModule, AuthModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService,PrismaService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
  consumer.apply(AuthMiddleware).forRoutes('');
  }
  }
