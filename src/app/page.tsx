"use client"

import { setupScrollingBackground } from './scrollingBackground.js';
import React, { useEffect, useState } from 'react';

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
      <div>
        <div className="text-block">Первые 6 глав мы играем за Леванию, девочку в чёрном. Она просыпается в клетке без голоса и эмоций, встречает Маму, и вместе они очищают истории от некой чёрной сущности, постепенно возвращая Левании утерянное.</div>
        <div className="text-block">На 6 главе происходит поворот и мы узнаем, что Левания изначально был чёрным монстром. Нас откидывает на 4 месяца назад и мы начинаем свой путь за него в его оригинальном обличии. Теперь аккомпанирует нам не Мама, а Унсоуя, её черный вариант. Он открывает дверь, призывая девочку в белом (её зовут Фио) из её мира в Клетку. Фио мигом становится подругой Левании, и добровольно кормит его снами, дабы тот исполнил свою мечту и стал человеком. Кормёжка снами происходит по тому же принципу — очищение пугал ака историй от некой чёрной сущности.</div>
        <div className="text-block">Накопив достаточно снов, мы попадем в историю самой Фио. И очищаем и её. Снов достаточно и происходит превращение Левании в человека. Увы, происходит всё не так, как он желал, и он попросту меняется телами с Фио. После чего Унсоуя атакует его.</div>
        <div className="text-block">Здесь мы получаем много сюжета. Во-первых, Унсоя атакует нас, потому что так приказало его руководство. Он по сути называет их Богами. Во-вторых, Боги даровали ему силу “Отрицания”. Более того, “Отрицание” это и есть та самая чёрная сущность, с которой мы воюем на протяжении всей игры. Унсоуя не может убить Леванию, потому что “”если я тебя убью, то “Путь” будет закрыт”. Унсою побеждаем не мы (как я понял из диалога), а его “хозяева”. Унсоя начинает говорить, что выполняет в этом мире приказы некой “Абсолютной сущности”, после чего говорит, что проболтался и складывается в гробик.</div>
        <div className="text-block">Появляется Мама, говоря нам, что она не враг и может помочь с восстановлением Фио. На снова перекидывают на 4 месяца вперёд, на момент когда Левания в теле девочки уже собрал всё необходимое. Мама говорит, что правило клетки — искупать свои грехи, тогда ты сможешь осуществить желание.</div>
        <div className="text-block">Мы находим Фио в теле Чёрного Монстра, но она отказывается меняться телами. Мама объясняет, что это действует сила “Отрицания”. Мы побеждаем Фио, возвращаем тела назад. Персонажи озвучивают Маме желание, что хотят быть вместе. Она исполняет их желание. Оба становятся оружием.</div>
        <div className="text-block">Мама передаёт это оружие другой Маме. Они хвалят друг друга за хорошо проделанную работу и мы видим катсцену, в которой бесчисленное количество Мам и Унсоуя устремляются куда-то в сторону солнца. Конец.</div>
        <div style={{ height: '500px' }} />
        <div className="text-block">О следующей главе мы не знаем ничего, кроме названия “История Солнца и Луны”.</div>

        <div className="text-block">Краткое описание первой главы новой арки. Далее спойлеры.</div>

        <div className="text-block">Игра начинается с чата в телефоне с неизвестным. Он предлагает ответить на три вопроса:</div>
        <div className="text-block">Что для вас друзья? Веселье вместе или чушь.</div>
        <div className="text-block">Что для вас деньги? Настоящее или будущее.</div>
        <div className="text-block">Кто важнее? Отец или мать.</div>

        <div className="text-block">По итогу, игра предлагает вам выбор персонажа на основе ответов. Я играл за парня, рассказ будет о его руте.</div>

        <div className="text-block">Парень просыпается в Клетке и ничего не понимает. По пути находим Маму. Она чёрного цвета, и создаётся впечатление, что она знает о Клетке даже меньше, чем протагонист. Постоянно тупит и все забывает.</div>
        <div className="text-block">В общем, цель новой сюжетной арки — собрать осколки Луны и вернуться обратно в Токио. Новый персонаж первой главы — ведьмочка, которая попадает в школу волшебства. Типичный Гарри Поттер.</div>
        <div className="text-block">У Мамы в сумке сидит младенец. Выглядит как крошечная Мама, но умён не по годам.</div>
        <div className="text-block">В финале главы находим груду телевизоров и через них возвращаем часть воспоминаний протагониста. Ничего интересного там нет — нелюдимый школьник с больной мамой. На этом глава кончается.</div>

        <div className="text-block">Краткое описание второй главы новой арки. Далее спойлеры.</div>

        <div className="text-block">Ничего не произошло. История теперь повествует про зверолюда, который хочет убить 100 волшебников, чтобы стать человеком. История напрямую связана с ведьмочкой из прошлой главы.</div>
        <div className="text-block">В глобальном сюжете подвижек нет, никаких новых зацепок нет. Старшеклассник и старшеклассница — брат и сестра. У парня жизнь тяжёлая, мать болеет, а он грустный и ходит на подработку. По словам очевидцев, девушка занимается торговлей запрещёнными препаратами и убегает от наркоторговцев.</div>
        <div className="text-block">Все последующие события второй арки:</div>

        <div className="text-block">В один из моментов главы персонажи попадают в жилище Кайнэ, которое выглядит в точности как в NieR: Automata. Попадают они туда через телепорт, и сопровождающая Мама не может найти их сигнал на карте. В этом месте персонаж засыпает, видит свои воспоминания, после чего получает ключ на выход.</div>
        <div className="text-block">По итогу оказывается, что парень и девушка, протагонисты – брат и сестра. Мы узнаём, что брат, Юзуки, убил собственного отца, с которым и жила его сестра, Хина. А его сестра в отместку за это убила собственную мать, с которой жил Юдзуки. Таким образом протагонисты ненавидят друг друга и в финале оба оказываются в Клетке в месте, “наиболее близком к реальному миру”. После чего один из персонажей убивает другого и мы получаем плохой конец.</div>
        <div className="text-block">Однако, перезапустив главу, мы добиваемся хорошего финала, в котором Мама и Папа примиряют Юдзуки и Хину, и те остаются жить в Клетке. Таинственный руководитель говорит Маме и Папе, что они облажались, допустив такой исход. Но это не важно, потому что Затмение произошло и теперь открыт некий “Путь”. И что теперь конфликт с Землёй неизбежен.</div>
        <div className="text-block">На этом нас оставили с ожиданием новой главы, которая должна дать ответы на новые вопросы. В новой главе главным героем снова становится Фио, а персонажи, которых она встречала в воспоминаниях в 1 главе каким-то образом и сами оказываются в Клетке. Это всё, что известно на данный момент.</div>

        <div className="text-block">Однако, Reincarnation дал нам самый большой кусок ЛОРа чуть ли не с релиза дополнительных материалов к Replicant. Так, EX персонажи Юдзуки и Хины открывают нам будущее этих персонажей. Оказывается, что Юдзуки – один из Red Eye, которых мы ещё никогда не видели вживую. Юдзуки был членом отряда, который послали искать учёного, способного излечить Синдром Белой Хлоринации, но это оказалось ложью. Весь отряд Юдзуки уничтожили, сам он узнал, что никакого учёного нет и организация Хаймлин таким образом собирала боевые данные. Заразившийся WCH Юдзуки в гневе становится повелителем Легиона, Red Eye.</div>
        <div className="text-block">История Хины чуть проще, она банально один из оперативников Института Хаймлин и занималась транспортировкой пойманного живого Легиона. За эти истории нам показывают несколько разных типов Легионов, которых мы так же ранее никогда не видели.</div>

        <div className="text-block">Третья арка: История человека и мира</div>

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
      <div className="background-container"></div>
    </main>
  );
}
