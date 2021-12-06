import React from 'react';
import './List.scss';
import TopNav from '../components/TopNav';
import CoffeeCard from '../components/CoffeeCard';
import { useState, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function List() {
	const [coffees, setCoffees] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/data/mockdata.json')
			.then((res) => res.json())
			.then((data) => {
				setCoffees(data);
			});
	}, []);

	return (
		<div className='List'>
			<div className='container'>
				<div>
					<TopNav />
				</div>

				<div>
					<div className='category'>
						<span id='title1'>콜드 브루 커피</span>
						{/* <FontAwesomeIcon icon={faCoffee} className="coffeeIcon" id="title2" /> */}
						<span id='title3'>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
					</div>

					<div className='itemList'>{coffees[0] && coffees[0].coldBrewCoffee.map((coffee) => <CoffeeCard coffee={coffee} key={coffee.id} />)}</div>

					<div className='category'>
						<span id='title1'>브루드 커피</span>
						{/* <FontAwesomeIcon icon={faCoffee} className="coffeeIcon" id="title2" /> */}
						<span id='title3'>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
					</div>

					<div className='itemList'>{coffees[1] && coffees[1].brewedCoffee.map((coffee) => <CoffeeCard coffee={coffee} key={coffee.id} />)}</div>
				</div>
			</div>
		</div>
	);
}

export default List;
