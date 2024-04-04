"use client"

import { setupScrollingBackground } from './scrollingBackground.js';
import React, { useEffect, useState } from 'react';
import JumpingImage from './jumpingPicture';
import Tooltip from './tooltip';
import LatestNewsButton from './modal';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
      setMaxScroll(document.body.scrollHeight - window.innerHeight);
    };

    const handleScroll = () => {
      updateScrollPosition();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateBackground = setupScrollingBackground();
    updateBackground(scrollPosition, maxScroll);
  }, [scrollPosition, maxScroll]);

  return (
    <main className="text-container">
      <div className="main">
        <div className="text-block">Молодая девочка в чёрном платье идёт сквозь ряды каменных башен. Спустя некоторое время она встречает левитирующее белое существо, именуемое “Мама”.</div>
        <div style={{ height: '100px' }} />
        <JumpingImage image="/images/Mama.png" width="200px" height="200px" text="amogus" />
        <div className="text-block">Девочка потеряла голос и не может говорить. Но Мама успокаивает её. Мама здесь, чтобы помочь. Они продолжают путь уже вместе. Мама объясняет, что девочка потеряла не только голос. Однако, пришло время вернуть всё, что было утрачено. Пред девочкой появляется винтовая лестница. Мама говорит, что это путь в её тюрьму, именуемую “Клетка”.</div>

        <div className="text-block">Поднявшись по лестнице они попадают в место, напоминающее прошлое. Сплошные каменные башни. Однако, здесь всюду лежит песок. Через некоторое время герои натыкаются на чёрную статую. По словам Мамы, эти странные статуи разбросаны по всей Клетке. Она не знает, кто их создал и называет их Тёмными Пугалами. Дотронувшись до Пугала, девушку засасывает внутрь. Здесь она видит историю молодого принца и его спутника, молчаливого механического солдата.</div>
        <JumpingImage image="/images/Wanderer.png" width="200px" height="350px" text="A prince hailing from a kingdom on the precipice of war, Rion is ostracized by his father due to his sickly demeanor and advocation for peace. After being locked in the castle's storeroom, he meets a defective clockwork soldier, Dimos, with whom he quickly forms a close bond. The two make their way to the throne room to demand a stop to the war, only for the king to label Rion a traitor and order him killed. After a narrow escape, Rion and Dimos decide to travel the kingdom together to find a way to put a stop to the war for the sake of his people.

Some time later, the pair find themselves on the outskirts of a windswept town. Looking for a place to rest, they make their way through, only to be stopped by men who recognize the boy as royalty. After a quick altercation, the two decide it best to leave the town behind, continuing their journey.

Eventually, they find themselves sheltering in a dilapidated church. Rion rests in the back of the chapel, weak from both his disease and hunger, while Dimos searches for food. He is able to find a few apples, but after being offered them, Rion's body is too weak and frail to accept them. Rion soon after succumbs to his illness, Dimos continuing to protect the prince's body even in death.

Over a century later, a bounty hunter, Gayle, makes her way to the church on rumors of a clockwork soldier killing anyone who comes near. When she arrives, a rusted—but still functional—Dimos protecting Rion's corpse remains. The two fight, only for the soldier to be finally struck down. Gayle checks his logs and learns of the pair's past, deciding to build a grave to mourn them before moving on."/>
        <div className="text-block">В процессе истории, принц и его спутник погибают от руки охотника за головами, которым овладела стая чёрных птиц. Эти существа искажают истории. И задача девушки избавляться от них, дабы восстановить истинную историю. Но ведь девочка уже об этом знает, не так ли?</div>

        <div className="text-block">Победив стаю, девушка очищает часть истории и возвращается обратно в Клетку. От статуи она получает посох. Мама добавляет, что задача девушки ещё и собирать подобное оружие. Герои продолжают свой путь по Клетке очищая статуи и продолжая наблюдать историю принца и механического солдата. В одной из частей мы также видим охотницу с механическими протезами, охотящуюся на принца.</div>

        <div className="text-block">Мама продолжает загадочно вещать, что они собирают истории, чтобы вернуть то, что девушка потеряла. А, заодно, чтобы исполнить желание девушки. Она даже немного приоткрывает тайну, что то место, где девушка очнулась, и то песчаное место, по которому они сейчас путешествуют - всё это лишь небольшая часть Клетки. И Клетка - место, в котором очень много тайн.</div>

        <div className="text-block">Очистив от искажений 4 пугала девушка завершает историю, что хранилась в посохе. За это девочка получает “Волю”. Один из потерянных ею фрагментов. Перед героями возникает новая лестница, а, значит, путь к следующим историям.</div>

        <div className="text-block">Следующей историей, которую очищает девочка, оказывается история охотницы с металлическими протезами. Во время путешествия по Клетке Мама и девочка встречают странного чёрного монстра, который пытается их атаковать. Но в последнее мгновение застывает, и моментально отступает. Это происшествие остаётся загадкой.</div>
        <JumpingImage image="/images/Hunter.png" width="200px" height="350px" text="amogus" />
        <div className="text-block">Восстановив историю охотницы, девочка получает следующий фрагмент - “Надежда”. Ей предстоит ещё много исправить и она поднимается по следующей лестнице.</div>

        <div className="text-block">Следующая статуя держит пистолет. И хранит в себе историю механического солдата.</div>
        <JumpingImage image="/images/Dimos.png" width="200px" height="350px" text="amogus" />
        <LatestNewsButton />
        <div className="text-block">Во время путешествия по этой части Клетки герои снова встречают чёрного монстра. В этот раз он сбегает только завидев их.</div>
        <div className="text-block">Восстановив финальное воспоминание из пистолета девочка получает “Молитву”. После чего продолжает путь.</div>

        <div className="text-block">Новая часть Клетки выглядит иначе. Всюду текут водопады и летают существа, похожие на китов. Воздух тут чистый. Статуи тут держат катану, в которой заключена история девушки-ассасина.</div>

        <div className="text-block">Герои в очередной раз встречают чёрного монстра. Он танцевал и хохотал, но, завидев персонажей, испугался и сбежал.</div>

        <div className="text-block">Восстановив историю из катаны девушка обретает “Гнев”. Мама говорит, что приближается момент, когда девочке нужно будет сделать выбор. И они продолжают путь в следующую часть Клетки.</div>

        <div className="text-block">Теперь Клетка вся покрыта снегом. Статуи этой части Клетки держат копье, в котором содержится история путешественника. Восстановив все части копья девочка получает “Печаль”. Новая лестница, ведущая к последнему фрагменту.</div>

        <div className="text-block">Мама говорит, что это финальная точка путешествия. Настало время восстановить последний фрагмент. Теперь статуи держат перчатки. В них содержится история чёрного монстра. Более того, в ней присутствует и сама Мама. По её словам эта история отличается от других. Мир внутри оружия чудовищно нестабилен. В этом мире живёт множество чёрных монстров. Мама упоминает, что эти воспоминания связаны с девочкой и восстановить их будет не просто. Эти монстры крадут и поглощают людские сны, желая обрести человеческое тело. Но, возможно, девочка знает об этом больше, чем сама Мама.</div>

        <div className="text-block">В одном из воспоминаний, Мама спрашивает монстра. Помнит ли он как встретил человека? Как поглотил все её сны. Получил её тело и стал человеком.</div>

        <div className="text-block">Мама и девочка продолжают путешествие по Клетке. Восстановление памяти о том, что девочка сделала это наказание за её грехи. Но скоро это кончится. Исполнится ли желание девочки? Перед девочкой последняя статуя. Её ждёт наказание за грехи.</div>
        <div className="text-block">В мире истории перед чёрным монстром стоит такая же девочка, как и главная героиня. Только в белом платье. Это её сны поглощал монстр. Её тело он украл и стал человеком. И именно в такой форме сейчас он и находится — грешница в чёрном. Монстр не мог жить с этим, потому что они с девочкой стали друзьями. Так же, как монстр принял форму девочки, так девочка превратилась в монстра. Именно её они с Мамой встречали на своём пути в Клетке. Героиня получает финальный фрагмент — “Речь”. Настало время объявить, чего же она желает. А желает она вернуть человеческой обличье той, у кого она его отняла.</div>

        <div className="text-block">Время обернулось вспять. И мы наблюдаем историю, что случилась 4 месяца назад. Чёрного монстра зовут Левания. Его встречает левитирующее существо, напоминающее Маму. Зовут его “Перевозчик”. Левания и Перевозчик встречают плачущую девочку в белом платье. Девочка рассказала, что каждую ночь её преследуют кошмары и попросила Леванию поглощать их. Так они начали путешествовать вместе. Девочку звали Фио.</div>

        <div className="text-block">Каждую ночь Фио перемещалась из своего мира в Клетку, встречалась с Леванией и вместе они путешествовали. Перевозчик предложил Левании и Фио очищать чёрные пугала от искажений. Фио думала, что это и есть её кошмары, но, по словам Перевозчика, они разные, хотя и похожи.</div>

        <div className="text-block">Оружие в статуях - меч. В нём содержится история мужчины, что сражался с огромными цветами.</div>

        <div className="text-block">По пути Перевозчик объясняет, что перед тем, как съесть сны Фио, необходимо восстановить воспоминания из оружия, которые являются первоначальной версией её снов. Возможно, что воспоминания из разных мест и времён становятся снами Фио. До этого Перевозчик никогда не встречал человека, который бы воспринимал воспоминания из оружия как сны.</div>

        <div className="text-block">История из оружия восстановлена, Фио возвращается в свой мир. Левания и Перевозчик продолжают своё путешествие.</div>

        <div className="text-block">На следующий вечер к ним снова присоединяется Фио. Новые статуи, новая история — жена человека из прошлой истории. В своём путешествии герои видят огромного чёрного лося. Это проклятый бог. Его присутствие в этой части Клетки приносит зло. Ещё одна история восстановлена и Фио отправляется в свой мир, а Левания получает новый сон в качестве угощения.</div>

        <div className="text-block">Ночь третья. Перевозчика вызывает к себе руководство. Вместо себя он оставляет Заместителя, который выглядит точно так же, но имеет другую шляпу.</div>
        <div className="text-block">Новые статуи содержат историю мальчика на войне.</div>
      </div>
      <div className="background-container"></div>
    </main>
  );
}
