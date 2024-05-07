"use client"

import { setupScrollingBackground } from './scrollingBackground.js';
import React, { useEffect, useState } from 'react';
import JumpingImage from './jumpingPicture';
import Tooltip from './tooltip';
import OpenWindow from './modal';
import { characterStory, modalText } from '../lib/enums.js'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setMaxScroll(document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateBackground = setupScrollingBackground();
    updateBackground(scrollPosition, maxScroll);
  }, [scrollPosition, maxScroll]);

  return (
    <main className="text-container">
      <div className="hero">
        <div className="overlay">
          <h1><center>Акт 1: История Девочки и Монстра</center></h1>
          <div style={{ height: '5000px' }} />
          <span className="text-block">Молодая девочка в чёрном платье идёт сквозь ряды каменных башен.</span>

          <JumpingImage image="/images/LevaniaGirl.png" width="136px" height="350px" text="" name="..." />

          <div style={{ height: '5000px' }} />
          <span className="text-block">Спустя некоторое время она встречает левитирующее белое существо, именуемое <b>“Мама”</b>.</span>

          <JumpingImage image="/images/Mama.png" width="200px" height="200px" text={characterStory.MAMA} name="Мама" />

          <span className="text-block">Девочка потеряла голос и не может говорить.</span>
          <span className="text-block">Но Мама успокаивает её.</span>
          <span className="text-block">Мама здесь, чтобы помочь.</span>
          <span className="text-block">Они продолжают путь уже вместе.</span>
          <span className="text-block">Мама объясняет, что девочка потеряла не только голос.</span>
          <span className="text-block">Однако, пришло время вернуть всё, что было утрачено.</span>
          <span className="text-block">Пред девочкой появляется винтовая лестница.</span>
          <span className="text-block">Мама говорит, что это путь в её тюрьму, именуемую “Клетка”.</span>
          <span className="text-block">Поднявшись по лестнице они попадают в место, напоминающее прошлое.</span>
          <span className="text-block">Сплошные каменные башни.</span>
          <span className="text-block">Однако, здесь всюду лежит песок.</span>
          <span className="text-block">Через некоторое время герои натыкаются на чёрную статую.</span>
          <span className="text-block">По словам Мамы, эти странные статуи разбросаны по всей Клетке.</span>
          <span className="text-block">Она не знает, кто их создал и называет их Тёмными Пугалами.</span>
          <span className="text-block">Дотронувшись до Пугала, девушку засасывает внутрь.</span>
          <span className="text-block">Здесь она видит историю молодого принца и его спутника, молчаливого механического солдата.</span>

          <JumpingImage image="/images/Wanderer.png" width="175px" height="350px" text={characterStory.RION} name="Рион" />

          <span className="text-block">В процессе истории, принц и его спутник погибают от руки охотника за головами, которым овладела стая чёрных птиц.</span>
          <span className="text-block">Эти существа искажают истории.</span>
          <span className="text-block">И задача девушки избавляться от них, дабы восстановить истинную историю.</span>
          <span className="text-block">Но ведь девочка уже об этом знает, не так ли? Победив стаю, девушка очищает часть истории и возвращается обратно в Клетку.</span>
          <span className="text-block">От статуи она получает посох.</span>
          <span className="text-block">Мама добавляет, что задача девушки ещё и собирать подобное оружие.</span>
          <span className="text-block">Герои продолжают свой путь по Клетке очищая статуи и продолжая наблюдать историю принца и механического солдата.</span>
          <span className="text-block">В одной из частей мы также видим охотницу с механическими протезами, охотящуюся на принца.</span>
          <span className="text-block">Мама продолжает загадочно вещать, что они собирают истории, чтобы вернуть то, что девушка потеряла.</span>
          <span className="text-block">А, заодно, чтобы исполнить желание девушки.</span>
          <span className="text-block">Она даже немного приоткрывает тайну, что то место, где девушка очнулась, и то песчаное место, по которому они сейчас путешествуют - всё это лишь небольшая часть Клетки.</span>
          <span className="text-block">И Клетка - место, в котором очень много тайн.</span>
          <span className="text-block">Очистив от искажений 4 пугала девушка завершает историю, что хранилась в посохе.</span>
          <span className="text-block">За это девочка получает “Волю”.</span>
          <span className="text-block">Один из потерянных ею фрагментов.</span>
          <span className="text-block">Перед героями возникает новая лестница, а, значит, путь к следующим историям.</span>
          <span className="text-block">Следующей историей, которую очищает девочка, оказывается история охотницы с металлическими протезами.</span>
          <span className="text-block">Во время путешествия по Клетке Мама и девочка встречают странного чёрного монстра, который пытается их атаковать.</span>
          <span className="text-block">Но в последнее мгновение застывает, и моментально отступает.</span>
          <span className="text-block">Это происшествие остаётся загадкой.</span>

          <JumpingImage image="/images/Hunter.png" width="178px" height="350px" text={characterStory.FRENRIZE} name="Френлиза" />

          <span className="text-block">Восстановив историю охотницы, девочка получает следующий фрагмент - “Надежда”.</span>
          <span className="text-block">Ей предстоит ещё много исправить и она поднимается по следующей лестнице.</span>
          <span className="text-block">Следующая статуя держит пистолет.</span>
          <span className="text-block">И хранит в себе историю механического солдата.</span>

          <JumpingImage image="/images/Dimos.png" width="191px" height="350px" text={characterStory.DIMOS} name="Димос" />

          <span className="text-block">Во время путешествия по этой части Клетки герои снова встречают чёрного монстра.</span>
          <span className="text-block">В этот раз он сбегает только завидев их.</span>
          <span className="text-block">Старик явно знал девочку и чёрного монстра и разговаривал словно ребёнок.</span>
          <span className="text-block">Восстановив финальное воспоминание из пистолета девочка получает “Молитву”.</span>
          <span className="text-block">После чего продолжает путь.</span>
          <span className="text-block">Новая часть Клетки выглядит иначе.</span>
          <span className="text-block">Всюду текут водопады и летают существа, похожие на китов.</span>
          <span className="text-block">Воздух тут чистый.</span>
          <span className="text-block">Статуи тут держат катану, в которой заключена история девушки-ассасина.</span>

          <JumpingImage image="/images/Akeha.png" width="192px" height="350px" text={characterStory.AKEHA} name="Акеха" />

          <span className="text-block">Герои в очередной раз встречают чёрного монстра.</span>
          <span className="text-block">Он танцевал и хохотал, но, завидев персонажей, испугался и сбежал.</span>
          <span className="text-block">Восстановив историю из катаны девушка обретает “Гнев”.</span>
          <span className="text-block">Мама говорит, что приближается момент, когда девочке нужно будет сделать выбор.</span>
          <span className="text-block">И они продолжают путь в следующую часть Клетки.</span>
          <span className="text-block">Теперь Клетка вся покрыта снегом.</span>
          <span className="text-block">Статуи этой части Клетки держат копье, в котором содержится история путешественника.</span>
          <span className="text-block">Восстановив все части копья девочка получает “Печаль”.</span>
          <span className="text-block">Новая лестница, ведущая к последнему фрагменту.</span>

          <JumpingImage image="/images/Argo.png" width="175px" height="350px" text={characterStory.ARGO} name="Арго" />

          <span className="text-block">Мама говорит, что это финальная точка путешествия.</span>
          <span className="text-block">Настало время восстановить последний фрагмент.</span>
          <span className="text-block">Теперь статуи держат перчатки.</span>
          <span className="text-block">В них содержится история чёрного монстра.</span>
          <span className="text-block">Более того, в ней присутствует и сама Мама.</span>
          <span className="text-block">По её словам эта история отличается от других.</span>
          <span className="text-block">Мир внутри оружия чудовищно нестабилен.</span>
          <span className="text-block">В этом мире живёт множество чёрных монстров.</span>
          <span className="text-block">Мама упоминает, что эти воспоминания связаны с девочкой и восстановить их будет не просто.</span>
          <span className="text-block">Эти монстры крадут и поглощают людские сны, желая обрести человеческое тело.</span>
          <span className="text-block">Но, возможно, девочка знает об этом больше, чем сама Мама.</span>
          <span className="text-block">В одном из воспоминаний, Мама спрашивает монстра.</span>
          <span className="text-block">Помнит ли он как встретил человека? Как поглотил все её сны.</span>
          <span className="text-block">Получил её тело и стал человеком.</span>
          <span className="text-block">Мама и девочка продолжают путешествие по Клетке.</span>
          <span className="text-block">Восстановление памяти о том, что девочка сделала это наказание за её грехи.</span>
          <span className="text-block">Но скоро это кончится.</span>
          <span className="text-block">Исполнится ли желание девочки? Перед девочкой последняя статуя.</span>
          <span className="text-block">Её ждёт наказание за грехи.</span>
          <span className="text-block">В мире истории перед чёрным монстром стоит такая же девочка, как и главная героиня.</span>
          <span className="text-block">Только в белом платье.</span>
          <span className="text-block">Это её сны поглощал монстр.</span>
          <span className="text-block">Её тело он украл и стал человеком.</span>
          <span className="text-block">И именно в такой форме сейчас он и находится — грешница в чёрном.</span>
          <span className="text-block">Монстр не мог жить с этим, потому что они с девочкой стали друзьями.</span>
          <span className="text-block">Так же, как монстр принял форму девочки, так девочка превратилась в монстра.</span>
          <span className="text-block">Именно её они с Мамой встречали на своём пути в Клетке.</span>
          <span className="text-block">Героиня получает финальный фрагмент — “Речь”.</span>
          <span className="text-block">Настало время объявить, чего же она желает.</span>
          <span className="text-block">А желает она вернуть человеческой обличье той, у кого она его отняла.</span>
          <span className="text-block">Время обернулось вспять.</span>
          <span className="text-block">И мы наблюдаем историю, что случилась 4 месяца назад.</span>
          <span className="text-block">Чёрного монстра зовут Левания.</span>

          <JumpingImage image="/images/LevaniaMonster.png" width="311px" height="350px" text={characterStory.LEVANIA} name="Левания" />

          <span className="text-block">Его встречает левитирующее существо, напоминающее Маму.</span>
          <span className="text-block">Зовут его “Перевозчик”.</span>

          <JumpingImage image="/images/Carrier.png" width="168px" height="200px" text={characterStory.CARRIER} name="Перевозчик" />

          <span className="text-block">Левания и Перевозчик встречают плачущую девочку в белом платье.</span>
          <span className="text-block">Девочка рассказала, что каждую ночь её преследуют кошмары и попросила Леванию поглощать их.</span>
          <span className="text-block">Так они начали путешествовать вместе.</span>
          <span className="text-block">Девочку звали Фио.</span>
          <span className="text-block">Каждую ночь Фио перемещалась из своего мира в Клетку, встречалась с Леванией и вместе они путешествовали.</span>
          <span className="text-block">Перевозчик предложил Левании и Фио очищать чёрные пугала от искажений.</span>
          <span className="text-block">Фио думала, что это и есть её кошмары, но, по словам Перевозчика, они разные, хотя и похожи.</span>
          <span className="text-block">Оружие в статуях - меч.</span>
          <span className="text-block">В нём содержится история мужчины, что сражался с огромными цветами.</span>

          <JumpingImage image="/images/O63y.png" width="136px" height="350px" text={characterStory.PRISONER} name="063y" />

          <span className="text-block">По пути Перевозчик объясняет, что перед тем, как съесть сны Фио, необходимо восстановить воспоминания из оружия, которые являются первоначальной версией её снов.</span>
          <span className="text-block">Возможно, что воспоминания из разных мест и времён становятся снами Фио.</span>
          <span className="text-block">До этого Перевозчик никогда не встречал человека, который бы воспринимал воспоминания из оружия как сны.</span>
          <span className="text-block">История из оружия восстановлена, Фио возвращается в свой мир.</span>
          <span className="text-block">Левания и Перевозчик продолжают своё путешествие.</span>
          <span className="text-block">На следующий вечер к ним снова присоединяется Фио.</span>
          <span className="text-block">Новые статуи, новая история — жена человека из прошлой истории.</span>
          <span className="text-block">В своём путешествии герои видят огромного чёрного лося.</span>
          <span className="text-block">Это проклятый бог.</span>
          <span className="text-block">Его присутствие в этой части Клетки приносит зло.</span>
          <span className="text-block">Ещё одна история восстановлена и Фио отправляется в свой мир, а Левания получает новый сон в качестве угощения.</span>

          <JumpingImage image="/images/F66x.png" width="178px" height="350px" text={characterStory.WIFE} name="F66x" />

          <span className="text-block">Ночь третья.</span>
          <span className="text-block">Перевозчика вызывает к себе руководство.</span>
          <span className="text-block">Вместо себя он оставляет Заместителя, который выглядит точно так же, но имеет другую шляпу.</span>
          <span className="text-block">Новые статуи содержат историю мальчика на войне.</span>

          <JumpingImage image="/images/Lars.png" width="200px" height="350px" text={characterStory.LARS} name="Ларс" />

          <span className="text-block">Очистив их от искажений Левания получает очередной сон.</span>
          <span className="text-block">Перевозчик возвращается, а Заместитель уходит.</span>
          <span className="text-block">Четвертая ночь, путешествие продолжает по тому же шаблону.</span>
          <span className="text-block">Теперь статуи держат пистолет с историей капитана.</span>
          <span className="text-block">Эта история связана с прошлой.</span>

          <JumpingImage image="/images/Griff.png" width="165px" height="350px" text={characterStory.GRIFF} name="Гриф" />

          <span className="text-block">Очередная история очищена, Левания съедает новый сон.</span>
          <span className="text-block">Однако, Фио чувствует себя не очень хорошо и возвращается в свой мир.</span>
          <span className="text-block">По словам Перевозчика, похоже, на её самочувствие влияют какие-то события в её собственном мире.</span>
          <span className="text-block">Ночь пятая.</span>
          <span className="text-block">Фио слаба, но как обычно бодра.</span>
          <span className="text-block">Впереди новые статуи, на этот раз с копьём.</span>
          <span className="text-block">Они содержат историю девушки-оружия.</span>

          <JumpingImage image="/images/Noelle.png" width="222px" height="350px" text={characterStory.NOELLE} name="Ноэль" />

          <span className="text-block">Ещё одна история очищена, ещё один сон поглощён.</span>
          <span className="text-block">Фио совсем плоха.</span>
          <span className="text-block">Шестая ночь.</span>
          <span className="text-block">Фио не появляется.</span>
          <span className="text-block">Перевозчик говорит, что Левания увидит её, когда доберётся до Пугала.</span>
          <span className="text-block">Потому что новая история это история Фио.</span>

          <JumpingImage image="/images/Fio.png" width="147px" height="350px" text={characterStory.FIO} name="Фио" />

          <span className="text-block">История Фио довольно печальна.</span>
          <span className="text-block">Левания, что очень сильно успел прикипеть к девочке, обещает, что став человеком он убьёт каждого, кто посмеет причинить ей боль.</span>
          <span className="text-block">Левания осознал, что ему нравится путешествовать с Фио, и что без неё он уже не хочет собирать сны.</span>
          <span className="text-block">Перевозчик подначивает Леванию продолжать.</span>
          <span className="text-block">Он работает уже очень много лет, давно не брал отпуск, а его жена постоянно ворчит.</span>
          <span className="text-block">Для него это возможность получить своё.</span>
          <span className="text-block">На пути стоит последнее пугало.</span>
          <span className="text-block">После его очищения Перевозчик переносит Фио в Клетку.</span>
          <span className="text-block">Бедняжка без сознания.</span>
          <span className="text-block">Левания поглощает последний сон, и, как было сказано ранее, превращается в девочку.</span>
          <span className="text-block">Фио же становится монстром.</span>
          <span className="text-block">Левания обвиняет Перевозчика в том, что тот его обманул.</span>
          <span className="text-block">Однако, Перевозчик не лгал.</span>
          <span className="text-block">Он сделал всё так, как и обещал.</span>
          <span className="text-block">Завязывается бой.</span>
          <span className="text-block">Перевозчик силён.</span>
          <span className="text-block">Он говорит, что начальство выдало ему силу отрицания.</span>
          <span className="text-block">Перевозчик упоминает, что не может убить Леванию, ведь тогда “Путь будет закрыт”.</span>
          <span className="text-block">Он получил приказ от “абсолютного существа”.</span>
          <span className="text-block">Видимо, Перевозчик сказал слишком много.</span>
          <span className="text-block">Его силы иссякают и Левании удаётся одолеть его.</span>
          <span className="text-block">Перед Леванией появляется Мама.</span>
          <span className="text-block">Она предлагает свою помощь, чтобы вернуть Фио её прежнее тело.</span>
          <span className="text-block">Мы возвращаемся к моменту, когда Левания получил речь и загадал желание.</span>
          <span className="text-block">Теперь у Левании есть всё, что нужно, чтобы помочь Фио.</span>
          <span className="text-block">Он должен искупить свои грехи.</span>
          <span className="text-block">Увы, монстр-Фио вступает с ним в бой.</span>
          <span className="text-block">Левания убеждает её, что они всегда будут друзьями и бой заканчивается.</span>
          <span className="text-block">Фио и Левания рады, что могут быть друзьями.</span>
          <span className="text-block">На этой ноте они оба превращаются в оружие.</span>
          <span className="text-block">Мама говорит, что, наконец-то, их истории восстановлены.</span>
          <span className="text-block">Мы видим, как Мама передаёт другой Маме оружие Фио и Левании.</span>
          <span className="text-block">Это было нелёгкое приключение.</span>
          <span className="text-block">Воспоминания обоих были очень сильно повреждены.</span>
          <span className="text-block">Мама упоминает, что они должны собрать все истории.</span>
          <span className="text-block">После чего присоединяется к огромному потоку из Мам и Перевозчиков, летящих сквозь башни Клетки.</span>

          <h1><center>Акт 2: История Солнца и Луны</center></h1>
          <JumpingImage image="/images/Yuzuki.png" width="271px" height="350px" text={characterStory.YUZUKI} name="Юзуки" />
          <JumpingImage image="/images/Yurie.png" width="137px" height="350px" text={characterStory.YURIE} name="Юриэ" />
          <JumpingImage image="/images/Priyet.png" width="303px" height="350px" text={characterStory.PRIYET} name="Пуриэ" />
          <JumpingImage image="/images/Dark_Mama.png" width="380px" height="350px" text={characterStory.DARK_MAMA} name="Темная Мама и ребенок" />
          <JumpingImage image="/images/Yudil.png" width="285px" height="350px" text={characterStory.YUDIL} name="Юдиль" />
          <JumpingImage image="/images/Marie.png" width="137px" height="350px" text={characterStory.MARIE} name="Мари" />
          <JumpingImage image="/images/Hina.png" width="190px" height="350px" text={characterStory.HINA} name="Хина" />
          <JumpingImage image="/images/Papa.png" width="290px" height="330px" text={characterStory.PAPA} name="Папа" />
          <JumpingImage image="/images/Saryu.png" width="195px" height="350px" text={characterStory.SARYU} name="Сарью" />
          <JumpingImage image="/images/SARAFA.png" width="239px" height="350px" text={characterStory.SARAFA} name="Сарафа" />

          <h1><center>Акт 3: История людей и мира</center></h1>
          <JumpingImage image="/images/10H.png" width="212px" height="350px" text={characterStory.TENH} name="10H" />
          <JumpingImage image="/images/Pod_006.png" width="245px" height="350px" text={characterStory.POD} name="Pod 006" />
          <div className="text-block">Мама говорит, что все персонажи игры не более чем воспоминания, сохраненные в оружии. А клетка это место, где эти воспоминания хранятся. Раньше Клетка выглядела как на 1 скриншоте, но бесконечные атаки врагов превратили её в то место, что мы видим в игре.</div>

          <div className="text-block">Говоря проще, в Клетке хранятся воспоминания, Мамы перерабатывают их в оружие, которым мы кромсаем врагов со времен Drakengard.</div>

          <div className="text-block">Сейчас на Клетку напали враги извне. Это три огромных шара, напоминающие Землю, Луну и Солнце. Мама собрала персонажей прошлых глав, чтобы достать из оружий «Истину» и отразить нападение врага.</div>

          <div className="text-block">Во второй главе ничего не происходит. Единственное, мы узнаём, что все костюмы персонажей, которые мы получаем в гаче, это истории персонажей игры из параллельных вселенных.</div>

          <div className="text-block">Третья глава.</div>

          <div className="text-block">В этот раз мы играем за мужчину заключенного (глава про Цветок) и Юри (ИИ черного цвета). Мужичок ищет свою жену, а Юри ищет ушедшую вразнос Мари (белый ИИ). Лонг стори шорт: бегаем опять по убитой Клетке, ищем жену, ничего не предвещает беды.</div>

          <div className="text-block">В один момент персонажи перемещаются в библиотеку. В нескольких интервью Ёко Таро говорил, что SINoALICE не имеет отношения к другим его играм, но тут мы без сомнения попадаем именно в мир этой игры. В библиотеке хранятся книги с историями персонажей игры. Там же есть и намёки на присутствие Аккорд (в одной из книг написано, что «Эта ветка обречена, прекратить наблюдение»). Позже из этой библиотеки мы попадаем ещё и в библиотеку из NieR, где видим близняшек. А почитав их книгу попадаем обратно в Клетку.</div>

          <div className="text-block">Там оказывается, что путешествующая с нами Юри нас использовала. На самом деле она пытается поглотить всю историю человечества из Клетки и стать совершенным существом. Возникает проблемка: история человечества не совершенна, она состоит исключительно из насилия, от чего Юри становится не очень хорошо. Нас спасает некий юноша солдат, и мы ретируемся.</div>

          <div className="text-block">В итоге, находим мы ещё раз жену и Юри, силой добра их спасаем, попадаем в хаб, где Мама говорит, мол, хорошо постарались, я вам когда-нибудь всё объясню. А мы ей такие: «особенно кто был тот солдат, который нас спас». И Мама такая: «А на сегодня всё, до новых встреч».</div>

          <div className="text-block">Следующая глава говорит нам о том, что все наши персонажи заперты в бесконечном цикле вины. Если персонаж решает свои грехи принять, то его выпускают в реальный мир.</div>

          <div className="text-block">В финале главы мы сражаемся с огромным Queen Beast-подобным нечто, чью природу не понимает даже Мама. По классике, финальный бой это ритм-игра (в этот раз простейшая), после которого мы оказываемся внутри Мамы и она выпускает всех (да не всех) персонажей в реальный мир.</div>

          <div className="text-block">А дальше мы узнаем, что Reincarnation это прямое продолжение NieR: Automata. Мы начинаем играть за Пода на некой базе, подобии Бункера. Вокруг валяются другие Поды. Мы открываем люк и видим лежащую на поверхности Луны модель YoRHa 10H. Которая говорит «Я 10H и я защищаю сервер, где содержится последняя информация о человечестве. Пожалуйста, помогите». На этом глава обрывается и оставляет нас ждать продолжения. Кто напал на сервер? И как вообще дальше будет выглядеть игра? Не понятно, не ясно.</div>

          <div className="text-block">Ранее я сказал, что не все персонажи отправляются Мамой в реальной мир. По какой-то причине главные герои прошлой арки не участвуют в этой от слова совсем.</div>

          <div className="text-block">Спойлеры самой новой, предпоследней, главы NieR: Reincarnation. Игра будет завершена в Марте 2024 года, после чего этот текст будет полностью переписан.</div>

          <div className="text-block">Мы помогаем 10Н, которая на Луне присматривает за сервером человечества, который, как вы уже могли понять, и является Клеткой. В реальности Мама оказывается Подом.</div>

          <div className="text-block">Для начала нас проводят по истории мира NieR, с которой уже знакомы те, кто чуть дальше игр вникал в историю. Мы видим падение дракона, сражение с Легионом, проект Гештальт, сражение с машинами. Все это, чтобы рассказать нам, что во время войны с Легионом люди решили отправить генетическую информацию и данные об истории человечества на Луну, чтобы однажды восстановить человечество.</div>

          <div className="text-block">Оказывается, что 10Н как минимум последняя модель YoRHa, как максимум – последний андроид (и она тоже, судя по всему, погибает). Бункер был полностью уничтожен машинами, последние его обитатели заражены логическим вирусом. Мы узнаем, что путь для врага к уничтожению Клетки мы открыли сами во 2 арке «Луна и Солнце». Теперь же герои этой арки снова открывают путь к Земле, чтобы отправиться туда и покончить со врагом.</div>

          <div className="text-block">В финале наши герои переносятся на Землю… Которая выглядит как заснеженная (ли?) Клетка. На этом нас оставляют ждать финальную главу.</div>

          <div className="text-block">Не ясно сколько лет прошло после событий Automata и откуда на Земле появился город, пришедший будто из Drakengard. И мы по прежнему не имеем понятия, кто тот самый враг напавший на Клетку. Логично предположить, что это Машины, но почему об этом до сих пор ни разу не сказали? И почему Мама, являясь Подом, настолько сильно поведенчески отличается от остальных моделей Подов? Ждём финал, чтобы узнать ответы на все вопросы.</div>

          <div className="text-block">В конце прошлой главы мы попали на Землю в образе белого Пода, внутри которого сидит Мама и все персонажи игры. Земля выглядит как Клетка. На самом деле это Клетка выглядит как Земля. Продвигаясь мы узнаём, что Ёко Таро завязал весь сюжет франшизы на Дереве из NieR: Replicant. Помните Forest of Myth? Да, это дерево лежит в основе всего.</div>

          <div className="text-block">Как вы помните, дерево это квантовый сервер. И если вы читали новеллу Затерянный Мир (https://musou.ru/2021/04/27/zateryannyj-mir/) или проходили её реткон в виде нового финала ремейка Replicant, то знаете, что Каинэ пошла искать Нира, наткнулась на физические воплощения Сервера в виде Мальчика (и Девочки в ретконе) и порубила их в капусту.</div>

          <div className="text-block">Так вот, Реинкарнация рассказывает, что мальчик родился в Сервере, посмотрев история человечества понял, что оно стоит на пути к собственному уничтожению, а потом понял, что Сервер может ещё и будущее видеть. Ну а будущее это бесконечная череда страданий и смерти людей, история бесконечно повторяет себя, вечный цикл. Приуныв, он открыл, что существуют ещё и бесконечные ветки, миры, и создал себе подружечку. Вместе они чиллили, пока не пришла Кайнэ и не убила их. Но на самом деле убила она только мальчика (тот был только рад, увидев в этом новый путь к спасению человечества), а девочка выжила и стала потихоньку ехать башней от одиночества. В какой-то момент после событий Автоматы, когда все Машины и Андроиды погибли, а на Земле не осталось никого, Девочка поглотила ещё и Красную Девочку. Приняв её в себя, она терраформировала Землю в то, какой была планета Пришельцев, создавших машины. И заморозила само время. Продолжая ехать башней от одиночества, Девочка решает, что человечество это не круто и надо бы ещё и Сервак на Луне добить. А дальше вы знаете.</div>

          <div className="text-block">Ну собственно силой дружбы Фио останавливает Девочку, андроиды и машины воскресают, Фио и Девочка получают физическую форму, конец. Человечество снова существует, ведь Фио реинкарнировала и исчезла из Клетки.</div>
        </div>
      </div>
      <div className="background-container"></div>
    </main>
  );
}
