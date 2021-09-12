import './App.scss';


const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU' />
        </div>
        <div>My Posts
          <div>New post
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
