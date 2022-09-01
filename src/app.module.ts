import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  'imports': [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      driver:require('mssql/msnodesqlv8'),
      extra: {
        driver: 'msnodesqlv8',
        server: 'localhost',
        connectionString: 'Driver={ODBC Driver 18 for SQL Server}; Server=DESKTOP-VIUCH90;UID=linux; PWD=linux; Database=node;TrustServerCertificate=yes;',
      }
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
