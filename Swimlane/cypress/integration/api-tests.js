/// <reference types="cypress" />
// // ===================================================================================================================================
//    P O S T     A P I   C A L L 
// // ===================================================================================================================================
    describe('Post to record api test', () => {
 //  authenticate so that we can make requests
        it('executes a get command',async () => {
          const response = await cy.request('POST','https://qa-practical.qa.swimlane.io/api/user/login',{
            "username": "sam.shucher",
            "password": "Sam123456!"
        })
        console.log(response.body.token)

        const MasterToken = response.body.token
        const AppID = 'aaUiorxB5O4lm4Cye'
        const PAYLOAD = { "applicationId": 'aaUiorxB5O4lm4Cye',
         "values": { "$type": "System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[System.Object, mscorlib]], mscorlib", "56674c5cc6c7dea0aeab4aed": "A new value",
         a8rki: "SmithLastName",
         a75lt: "JonyFirstName",
         adwok: "The Big City"
        
        } }
      
        // Send Post Call
        cy.request({
         method: 'POST',
         url: 'https://qa-practical.qa.swimlane.io/api/app/aaUiorxB5O4lm4Cye/record',
         body: PAYLOAD,
         headers: {
           authorization: 'Bearer ' + MasterToken, // consume the token
         },
       }).then((records) => {
            console.log(records)

            const recordID = records.body.id
            console.log(recordID)

       })

      })
    })
   
   
// // ===================================================================================================================================
//    G E T    A P I   C A L L 
// // ===================================================================================================================================
 describe('Get record api test with Record ID  ', () => {

   it('executes a get command',async () => {
      //  authenticate so that we can make requests
     const response = await cy.request('POST','https://qa-practical.qa.swimlane.io/api/user/login',{
       "username": "sam.shucher",
       "password": "Sam123456!"
   })
   console.log(response.body.token)

   const MasterToken = response.body.token
   const AppID = 'aaUiorxB5O4lm4Cye'
   const PAYLOAD = { "applicationId": 'aaUiorxB5O4lm4Cye',
    "values": { "$type": "System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[System.Object, mscorlib]], mscorlib", "56674c5cc6c7dea0aeab4aed": "A new value",
    a8rki: "SmithLastName",
    a75lt: "JonyFirstName",
    abjcf: "",
    adwok: "The Big City" } }
   
   // Send Get Call
    cy.request({
    method: 'GET',
    url: 'https://qa-practical.qa.swimlane.io/api/app/aaUiorxB5O4lm4Cye/record/?myparam1=${recordID}',
    body: PAYLOAD,
    headers: {
      authorization: 'Bearer ' + MasterToken, // consume the token
    },
  }).then((records) => {
       console.log(records)

       const recordID = records.body.id

       console.log(recordID)
  })
   })
})
// // ===================================================================================================================================
//    D E L E T E    A P I   C A L L 
// // ===================================================================================================================================

describe('Delete record api test with Record ID  ', () => {

   it('executes a get command',async () => {
      //  authenticate so that we can make requests
     const response = await cy.request('POST','https://qa-practical.qa.swimlane.io/api/user/login',{
       "username": "sam.shucher",
       "password": "Sam123456!"
   })
   console.log(response.body.token)

   const MasterToken = response.body.token
   const AppID = 'aaUiorxB5O4lm4Cye'
   const PAYLOAD = { "applicationId": 'aaUiorxB5O4lm4Cye',
    "values": { "$type": "System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[System.Object, mscorlib]], mscorlib", "56674c5cc6c7dea0aeab4aed": "A new value",
    a8rki: "SmithLastName",
    a75lt: "JonyFirstName",
    abjcf: "",
    adwok: "The Big City" } }
   
   // Send Delete Call
    cy.request({
    method: 'DELETE',
    url: 'https://qa-practical.qa.swimlane.io/api/app/aaUiorxB5O4lm4Cye/record/?myparam1=${recordID}',
    body: PAYLOAD,
    headers: {
      authorization: 'Bearer ' + MasterToken, // consume the token
    },
   })
})
})


