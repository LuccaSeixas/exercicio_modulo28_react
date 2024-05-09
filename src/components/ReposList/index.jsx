import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect (() => {
        fetch('https://api.github.com/users/LuccaSeixas/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, []);

    return (
        <ul>
            {repos.map(({id, name, language, html_url}) => (
                <li key={id}>
                    <b>Nome:</b> {name} <br/>
                    <b>Linguagem:</b> {language} <br/>
                    <a target="_blank" href={html_url}>Visitar no Github</a> <br/>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    )
}

export default ReposList;