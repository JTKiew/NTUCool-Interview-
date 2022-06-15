import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {}
