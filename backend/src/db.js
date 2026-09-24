import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const file=path.join(__dirname,'../data/db.json');
const seed={
 restaurants:[
  {id:1,name:'Green Bowl Kitchen',cuisine:'Healthy · Indian',rating:4.8,deliveryTime:25,deliveryFee:39,image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80'},
  {id:2,name:'The Curry Table',cuisine:'Indian',rating:4.7,deliveryTime:30,deliveryFee:29,image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80'},
  {id:3,name:'Pasta & Co.',cuisine:'Italian',rating:4.6,deliveryTime:35,deliveryFee:49,image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80'}
 ],
 meals:[
  {id:1,restaurantId:'r1',name:'Paneer Steak with Vegetables',category:'High Protein',price:249,calories:526,protein:26,carbs:38,fat:30,time:20,image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'},
  {id:2,restaurantId:'r2',name:'Classic Dal Tadka & Rice',category:'Comfort',price:199,calories:480,protein:18,carbs:72,fat:12,time:25,image:'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80'},
  {id:3,restaurantId:'r3',name:'Roast Chicken with Herb Rice',category:'Balanced',price:299,calories:533,protein:37,carbs:58,fat:17,time:30,image:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80'}
 ]
};
function read(){if(!fs.existsSync(file)) fs.writeFileSync(file,JSON.stringify(seed,null,2)); const d=JSON.parse(fs.readFileSync(file,'utf8')); if(!d.restaurants?.length)d.restaurants=seed.restaurants; if(!d.meals?.length)d.meals=seed.meals; return d;}
function write(d){fs.writeFileSync(file,JSON.stringify(d,null,2));}
export function getDb(){return read();}
export function updateDb(fn){const d=read(); const out=fn(d)||d; write(out); return out;}
