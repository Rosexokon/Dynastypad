import UAuth from "@uauth/js"

const uauth = new UAuth({
        clientID: "f196fade-1a56-49d3-9bf0-74a50e34674d",
        redirectUri: "https://www.dynastypad.com/",
        scope: "openid wallet"
})

// uauth.user()
//     .then((user) => {
//         // user exists
//         console.log("User information:", user)
//     })
//     .catch(() => {
//         // user does not exist
//     })

// const Web3modal = async () => {
//     try {
//         const authorization = await uauth.loginWithPopup()
//         console.log(authorization)
//     } catch (error) {
//         console.error(error)
//     }
// }



const Web3modal = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
      const domainName = authorization.idToken.sub;
      const walletAddress = authorization.idToken.wallet_address;

      console.log('logged in')
      console.log(authorization)
      console.log('Domain name:', domainName);
      console.log ('Eth Address', walletAddress);

    } catch (error) {
      console.error(error)
    }
  }


  const logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }
  

  // {connectedAddress.length > 0 ? `${connectedAddress.substring(0, 6)}...${connectedAddress.substring(38)}` : 'Connect wallet'}

  export default Web3modal;
//   export default logout;