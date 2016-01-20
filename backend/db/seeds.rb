# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

companies = Company.create([{name: 'TKO-äly', website: 'http://tko-aly.fi', sponsored: false }, {name: 'Solinor Oy', website: 'https://solinor.fi', sponsored: true}, {name: 'Futurice Oy', website: 'https://futurice.com', sponsored: true}])

jobs = Job.create([{title: 'Puheenjohtaja', company_id: 1, description: 'Tartteis hyvän puheenjohtajan'}])
