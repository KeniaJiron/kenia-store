import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasModule } from './marcas/marcas.module';
import { ModelsModule } from './models/models.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      username:'postgres',
      password:'Ec915810',
      port: 5432,
      database: 'Store',
      synchronize: true
    }),
    MarcasModule, ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
