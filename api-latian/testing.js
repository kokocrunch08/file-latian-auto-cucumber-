const apiUnderTest = require('./api-reqres'); // import yg ditaruh di variable
const expect = require('chai').expect;


describe('test suite', async() => {
    it('ID-01', async() => {
        const response = await apiUnderTest.getUSer() // reposnes yang ditaruh di variable
        console.log(response.status);
        // console.log(response.body);

        const data = response.body.data
        for(let i = 0; i < data.length; i++){
            // console.log(data[i].last_name);  
            expect(data[i].last_name).to.not.eql(null); //data tidak boleh ksoong "not to eql "
            expect(response.status).to.eql(200)
            // console.log(response.body);
        }
      
        
    });
    it('ID-02 ', async() => {
        const response = await apiUnderTest.createUser()
        // console.log(response.body)
        console.log(response.status)
        const data = response.body
        expect(data.name).to.equal('morpheus')
        
    })


    // passing username with parameter
    it('ID-03', async () => {
        const data = {
            "name": 'riko',
            "job": 'enginerr'
        }

        const response = await apiUnderTest.createUser1(data)
        console.log(response.status)
        console.log(response.body)
        expect(response.status).to.equal(201)
    })
});