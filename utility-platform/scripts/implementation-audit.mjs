import fs from 'node:fs';
const catalog=JSON.parse(fs.readFileSync(new URL('../src/data/catalog.json',import.meta.url),'utf8'));
const modules=await Promise.all([
 import('../src/engines/calculator/specs.ts'),import('../src/engines/simple-registry.ts'),import('../src/engines/file-registry.ts')
]);
const [calc,simple,file]=modules;
const ids=[...calc.calculatorSpecIds(),...simple.simpleImplementedIds(),...file.fileImplementedIds()];
const unique=new Set(ids),catalogIds=new Set(catalog.tools.map(x=>x.id));
const missing=[...catalogIds].filter(x=>!unique.has(x)),unknown=[...unique].filter(x=>!catalogIds.has(x)),duplicates=ids.filter((x,i)=>ids.indexOf(x)!==i);
const report={catalogTools:catalogIds.size,calculatorTools:calc.calculatorSpecIds().length,simpleTools:simple.simpleImplementedIds().size,fileTools:file.fileImplementedIds().size,implementedUnique:unique.size,missing,unknown,duplicates:[...new Set(duplicates)],complete:missing.length===0&&unknown.length===0&&duplicates.length===0&&unique.size===catalogIds.size};
fs.mkdirSync(new URL('../reports/',import.meta.url),{recursive:true});fs.writeFileSync(new URL('../reports/implementation-audit.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(!report.complete)process.exit(1);
