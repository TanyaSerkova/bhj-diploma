/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const newIncomeButton = this.element.querySelector('.create-income-button');
    const newExpenseButton = this.element.querySelector('.create-expense-button');

    newIncomeButton.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('newIncome').open();
    });

    newExpenseButton.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('newExpense').open();
    })
  }
}
