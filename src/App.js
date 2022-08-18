import ListItem from './compenents/ListItem';

function App() {
    const list = ['toggle', 'click me', 'change'];

    return (
        <div className="App">
            {list.map((item, index) => (
                <ListItem name={item} key={index} />
            ))}
        </div>
    );
}

export default App;
