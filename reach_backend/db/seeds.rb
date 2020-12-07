require 'faker'

User.create(number: "12129420987")

Voter.create(number: "+16468729355", name: "Vincent Collis", photo: "https://randomuser.me/api/portraits/thumb/men/1.jpg")

Voter.create(number: "+12129420987", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/2.jpg")
Voter.create(number: "+19738430587", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/women/3.jpg")
Voter.create(number: "+16464420384", name:Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/4.jpg")
Voter.create(number: "+18084425937", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/women/5.jpg")
Voter.create(number: "+12126827967", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/6.jpg")

Voter.create(number: "+12129420487", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/7.jpg")
Voter.create(number: "+19738433687", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/women/8.jpg")
Voter.create(number: "+16464407984", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/9.jpg")
Voter.create(number: "+18084428737", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/women/10.jpg")
Voter.create(number: "+12126827967", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/11.jpg")
 
Voter.create(number: "+12129230987", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/12.jpg")
Voter.create(number: "+19738434757", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/women/13.jpg")
Voter.create(number: "+16464425464", name: Faker::Name.first_name + ' ' + Faker::Name.last_name, photo: "https://randomuser.me/api/portraits/thumb/men/14.jpg")


300.times do
    Message.create(
        origin: [true, false].sample,
        body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true),
        user_id: User.all.sample.id,
        voter_id: Voter.all.sample.id
    )
end
