const loginModal = document.getElementById('loginModal')
const tradeModal = document.getElementById('tradeModal')
const tradeTitle = document.getElementById('tradeTitle')

document.getElementById('loginBtn').onclick = () => {
  loginModal.style.display = 'flex'
}

function closeLogin() {
  loginModal.style.display = 'none'
}

function openTrade(side, price) {
  tradeTitle.innerText = `Comprar ${side} @ ${price}`
  tradeModal.style.display = 'flex'
}

function closeTrade() {
  tradeModal.style.display = 'none'
}
