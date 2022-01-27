let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

employers = employers.reduce((acc, cur) => {
	if(cur && cur.trim()) {
		cur = cur.toLocaleLowerCase().trim()
		cur = cur[0].toUpperCase() + cur.slice(1)
		acc = acc ? [...acc, cur] : [cur]
	}

	return acc
}, [])

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const lesson = data.cash.reduce((acc, cur) => acc += cur)

const makeBusiness = (director, teacher, allModule, gang, course) => {
	const sumTech = [...data.react, ...data.add, 'и другие']

	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher ? teacher : 'Максим'}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим: \n${sumTech}`);
}

makeBusiness.apply(null, ['Артем', null, lesson, employers, nameCourse]);
