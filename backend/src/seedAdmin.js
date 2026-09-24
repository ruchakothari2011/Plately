import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import {v4 as uuid} from 'uuid';
import {getDb,updateDb} from './db.js';
dotenv.config();
const email=(process.env.ADMIN_EMAIL||'admin@plately.local').toLowerCase();
const password=process.env.ADMIN_PASSWORD||'ChangeMe123!';
const db=getDb();
if(db.users.some(u=>u.email===email)){console.log('Admin already exists:',email);process.exit(0)}
const user={id:uuid(),name:'Plately Admin',email,passwordHash:await bcrypt.hash(password,12),phone:'',role:'admin',createdAt:new Date().toISOString()};
updateDb(d=>(d.users.push(user),d));
console.log('Admin created:',email); console.log('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env for a custom admin.');
