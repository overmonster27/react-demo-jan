import './App.css';
import {Character} from "./Components/Сharacter_files/Charater";

function App() {
    return (
        <div className="App">

            <Character
                name={'Bart'}
                desc={'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980)[7]is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.'}
                picture={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />

            <Character
                name={'Homer'}
                desc={'Homer Jay Simpson (born May 12, 1956)[40] is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t.'}
                picture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />

            <Character
                name={'Marge'}
                desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11] is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'}
                picture={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
            />

            <Character
                name={'Bart'}
                desc={'Lisa Marie Simpson (born May 9, 1983)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                picture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
            />

            <Character
                name={'Martin'}
                desc={'Martin Prince is a recurring character in The Simpsons. He is a friend and classmate of Bart Simpson, and rivals Lisa\'s intelligence. He is Nelson Muntz\'s favorite target for bullying and is an academically brilliant teacher\'s pet and is portrayed as a stereotypical nerd. Martin is a fourth-grade student at Springfield Elementary School. He is usually shown on friendly terms with Bart due to the fact that he is occasionally seen with him, along with Nelson, Milhouse, and other kids.'}
                picture={'https://static.wikia.nocookie.net/simpsons/images/4/46/Martin_Prince.png'}
            />
        </div>
    );
}

export default App;
