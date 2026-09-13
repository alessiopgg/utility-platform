import type { SimpleToolSpec, SimpleValues } from '../simple-types.ts';
type Unit={label:string,toBase:(x:number)=>number,fromBase:(x:number)=>number};
const linear=(label:string,factor:number):Unit=>({label,toBase:x=>x*factor,fromBase:x=>x/factor});
const sets:Record<string,Record<string,Unit>>={
 'length-converter':{m:linear('Meters',1),km:linear('Kilometers',1000),cm:linear('Centimeters',.01),mm:linear('Millimeters',.001),in:linear('Inches',.0254),ft:linear('Feet',.3048),yd:linear('Yards',.9144),mi:linear('Miles',1609.344)},
 'area-converter':{m2:linear('Square meters',1),km2:linear('Square kilometers',1e6),cm2:linear('Square centimeters',1e-4),ft2:linear('Square feet',.09290304),yd2:linear('Square yards',.83612736),acre:linear('Acres',4046.8564224),ha:linear('Hectares',10000)},
 'volume-converter':{l:linear('Liters',1),ml:linear('Milliliters',.001),m3:linear('Cubic meters',1000),cm3:linear('Cubic centimeters',.001),galUS:linear('US gallons',3.785411784),qtUS:linear('US quarts',.946352946),cupUS:linear('US cups',.2365882365),flozUS:linear('US fl oz',.02957352956)},
 'weight-converter':{kg:linear('Kilograms',1),g:linear('Grams',.001),mg:linear('Milligrams',1e-6),lb:linear('Pounds',.45359237),oz:linear('Ounces',.028349523125),t:linear('Metric tonnes',1000)},
 'speed-converter':{mps:linear('m/s',1),kph:linear('km/h',1/3.6),mph:linear('mph',.44704),knot:linear('Knots',.514444444)},
 'pressure-converter':{pa:linear('Pascals',1),kpa:linear('kPa',1000),bar:linear('Bar',100000),psi:linear('PSI',6894.757293),atm:linear('Atmospheres',101325),mmhg:linear('mmHg',133.322387)},
 'energy-converter':{j:linear('Joules',1),kj:linear('Kilojoules',1000),cal:linear('Calories',4.184),kcal:linear('Kilocalories',4184),wh:linear('Watt-hours',3600),kwh:linear('Kilowatt-hours',3.6e6),btu:linear('BTU',1055.05585262)},
 'power-converter':{w:linear('Watts',1),kw:linear('Kilowatts',1000),mw:linear('Megawatts',1e6),hp:linear('Horsepower',745.699872)},
 'torque-converter':{nm:linear('N·m',1),lbft:linear('lb·ft',1.3558179483),lbin:linear('lb·in',.112984829)},
 'density-converter':{kgm3:linear('kg/m³',1),gcm3:linear('g/cm³',1000),lbft3:linear('lb/ft³',16.018463)},
 'data-storage-converter':{B:linear('Bytes',1),KB:linear('KB (decimal)',1000),MB:linear('MB (decimal)',1e6),GB:linear('GB (decimal)',1e9),TB:linear('TB (decimal)',1e12),KiB:linear('KiB',1024),MiB:linear('MiB',1048576),GiB:linear('GiB',1073741824)},
 'data-transfer-rate-converter':{bps:linear('bit/s',1),kbps:linear('kbit/s',1e3),mbps:linear('Mbit/s',1e6),gbps:linear('Gbit/s',1e9),Bps:linear('Byte/s',8),MBps:linear('MB/s',8e6)},
 'angle-converter':{rad:linear('Radians',1),deg:linear('Degrees',Math.PI/180),grad:linear('Gradians',Math.PI/200),turn:linear('Turns',2*Math.PI)},
 'time-converter':{s:linear('Seconds',1),ms:linear('Milliseconds',.001),min:linear('Minutes',60),h:linear('Hours',3600),day:linear('Days',86400),week:linear('Weeks',604800)},
 'frequency-converter':{hz:linear('Hertz',1),khz:linear('Kilohertz',1e3),mhz:linear('Megahertz',1e6),ghz:linear('Gigahertz',1e9)},
 'force-converter':{n:linear('Newtons',1),kn:linear('Kilonewtons',1000),lbf:linear('Pound-force',4.4482216153),kgf:linear('Kilogram-force',9.80665)},
 'acceleration-converter':{mps2:linear('m/s²',1),g:linear('g',9.80665),ftps2:linear('ft/s²',.3048)},
 'cooking-measurement-converter':{ml:linear('Milliliters',1),l:linear('Liters',1000),tspUS:linear('US teaspoons',4.92892159375),tbspUS:linear('US tablespoons',14.78676478125),cupUS:linear('US cups',236.5882365),flozUS:linear('US fl oz',29.5735295625)},
};
const temp:Record<string,Unit>={C:{label:'Celsius',toBase:x=>x,fromBase:x=>x},F:{label:'Fahrenheit',toBase:x=>(x-32)*5/9,fromBase:x=>x*9/5+32},K:{label:'Kelvin',toBase:x=>x-273.15,fromBase:x=>x+273.15}};
sets['temperature-converter']=temp;
const fuel:Record<string,Unit>={l100:{label:'L/100 km',toBase:x=>x,fromBase:x=>x},mpgUS:{label:'MPG (US)',toBase:x=>235.214583/Math.max(x,1e-12),fromBase:x=>235.214583/Math.max(x,1e-12)},mpgUK:{label:'MPG (UK)',toBase:x=>282.480936/Math.max(x,1e-12),fromBase:x=>282.480936/Math.max(x,1e-12)},kml:{label:'km/L',toBase:x=>100/Math.max(x,1e-12),fromBase:x=>100/Math.max(x,1e-12)}};
sets['fuel-economy-converter']=fuel;
const makeSpec=(id:string,units:Record<string,Unit>):SimpleToolSpec=>({id,intro:'Convert between common units locally in your browser.',fields:[{key:'value',label:'Value',type:'number',defaultValue:1,step:.000001},{key:'from',label:'From',type:'select',defaultValue:Object.keys(units)[0],options:Object.entries(units).map(([value,u])=>({value,label:u.label}))},{key:'to',label:'To',type:'select',defaultValue:Object.keys(units)[1]??Object.keys(units)[0],options:Object.entries(units).map(([value,u])=>({value,label:u.label}))}],execute:(v:SimpleValues)=>{const from=units[String(v.from)],to=units[String(v.to)];if(!from||!to)throw new Error('Unknown unit');const x=Number(v.value);if(!Number.isFinite(x))throw new Error('Enter a number');const value=to.fromBase(from.toBase(x));return[{label:`${from.label} → ${to.label}`,value}]}});
const specs=Object.fromEntries(Object.entries(sets).map(([id,u])=>[id,makeSpec(id,u)])) as Record<string,SimpleToolSpec>;
export const unitToolIds=()=>Object.keys(specs);
export const getUnitSpec=(id:string)=>specs[id];
export const runUnitTool=(id:string,v:SimpleValues)=>{const x=specs[id];if(!x)throw new Error(`Unit tool not implemented: ${id}`);return x.execute(v)};
