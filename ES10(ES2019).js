const array = [1,2,3,4,5]
array.flat()
///

const array2 = [1,[2,3],[4,5]]
array2.flat()

/////

const array3 = [1,2,[3,4,[5]]]
array3.flat()

///

const array4 = [1,2,[3,4,[5]]]
array4.flat(2)

///

const jurassicPark = [['🐌','🦇'],'🐍','🐙',['🦉','🐆'],[[[['🦅']]],'🐈'],['🐉','🐺']]
jurassicPark.flat(50)

/////

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()

////

const jurassicParkCaos = jurassicPark.flatMap(creature => creature + '🐙')


///

const userEmail = '         eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail      '

console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())


/////

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 38]]

Object.formEntries(userProfiles)

const obj = Object.formEntries(userProfiles)
Object.entries(obj)

/////


try{
true + 'hi'

} catch{
console.log('you messed up')

}
