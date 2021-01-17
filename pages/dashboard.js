import Link from 'next/link';
import Head from 'next/head';
import { charityRead, charityWrite, charitySearch } from '../lib/api.js';
import { useState, useEffect } from 'react';
import Footer from '../components/footer';
import firebase from "firebase";
import SearchBar from "../components/searchBar";

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote 'shut') (perhaps I did)
    const [charities, setCharities] = useState([]);

    useEffect(() => {
		firebase.auth().onAuthStateChanged(() => {
			if (!firebase.auth().currentUser) {
				window.location = '/login';
			}
		});

        charitySearch({ name: '', tags: '' }).then((data) => { // kinda makes me regret server side filtering
            if (data.ok) {
                console.log(data.data);
                setCharities(data.data);
            }
        });
	}, []);


    return (
			<div>
            <Head>
                <title>Pana | Dashboard</title>
            </Head>	
            <nav>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <input type="text" placeholder="Search..." />
                <Link href="/charity/new">
                    <a className="btn-secondary btn">Create Fund</a>
                </Link>
            </nav>
            <article>
                <SearchBar onSearch={(res) => {
                    console.log(res);
                    setCharities(res);
                 }} />
                <ul>
                {
                    charities.size == 0 ? 'Loading...' : charities.map(item => 
                        <li>
                            <Link href={`/charity/view/${item.id}`}>
                                <h3>{item.name}</h3>
                            </Link>
                            <p>
                            {item.desc.slice(0, 100) + item.desc.lenggth >= 100 ? '...' : ''}
                            </p>
                            <ul>
                                {
                                    item.tags.split(' ').map(tag =>
                                    <li>{tag}</li>)
                                }
                            </ul>
                        </li>
                    )
                    // Improve this later obviously
                }
                </ul>
            </article>
					<Footer/>
		</div>
	);
}

//export default HomePage;