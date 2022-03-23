import { franc, francAll } from 'franc'
import langs from 'langs';


const input = process.argv[2]
const langCode = franc(input)

if (langCode === 'und') {
    console.log('Couldn\'t find it')

} else {
    const language = langs.where("3", langCode)
    console.log(language.name)

}