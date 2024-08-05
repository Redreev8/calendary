import fs from 'fs'
import path from 'path'
import contentTsx from './helper/content-tsx'
import contentIndex from './helper/content-index'
import contentStyleModule from './helper/content-style-module'
import __dirname from './__dirname'

interface Args {
    name: string
    path: 'UI' | 'components'
}

const args: Args = {
    name: 'component',
    path: 'UI'
}
for (let i = 2; i < process.argv.length; i++) {
    const el = process.argv[i].split('=')
    if (el[0] === 'name') args[el[0]] = el[1]
    if (el[0] === 'path' && (el[1] === 'UI' || el[1] === 'components')) args[el[0]] = el[1]    
}

const dir = path.join(__dirname, 'src', args['path'], args.name)
fs.mkdirSync(dir)
fs.writeFileSync(
    path.join(dir, `${args.name}.tsx`),
    contentTsx(args.name),
    { encoding: "utf8", flag: 'w' }
)
fs.writeFileSync(
    path.join(dir, 'index.ts'),
    contentIndex(args.name),
    { encoding: "utf8", flag: 'w' }
)
fs.writeFileSync(
    path.join(dir, `${args.name}.module.scss`),
    contentStyleModule(),
    { encoding: "utf8", flag: 'w' }
)
