import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Например, можно установить основной цвет темы
    tg.MainButton.setText("Закрыть");
    tg.MainButton.show();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Telegram MiniApp!</h1>
    </div>
  );
}

export default App;
