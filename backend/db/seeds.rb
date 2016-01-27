# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

companies = Company.create([
  { name: 'TKO-äly', website: 'http://tko-aly.fi', sponsored: false, logo: 'tko-aly.png' },
  { name: 'Solinor Oy', website: 'https://solinor.fi', sponsored: true, logo: 'solinor.png' },
  { name: 'Futurice Oy', website: 'https://futurice.com', sponsored: true, logo: 'futurice.png' }
])

d1 = DateTime.new(2015, 12, 10)
d2 = DateTime.new(2016, 1, 1)

jobs = Job.create([
  { title: 'Puheenjohtaja', company_id: 1, description: 'Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajanTartteis hyvän puheenjohtajan Tartteis hyvän puheenjohtajan', begin: d1, end: d2 },
  { title: 'Software Developer', company_id: 2, description: '<p>Tartteis <strong>todella</strong> kovan koodarin</p>' },
  { title: 'Project Manager', company_id: 3, description: 'Kokenut Project Manager haussa!' }
])

Job.create([
    { title: 'UX Designer', company_id: 2, description: 'UX-suunnittelija haussa' }
])

tags = Tag.create([
  {name: 'Java'},
  {name: 'Spring'},
  {name: 'Ruby on Rails'},
  {name: 'AngularJS'}
])

jobTags = JobTag.create([{job_id: 1, tag_id: 1}, {job_id: 1, tag_id: 2}, {job_id: 1, tag_id: 3},
  {job_id: 2, tag_id: 1}, {job_id: 2, tag_id: 2}, {job_id: 2, tag_id: 3},
  {job_id: 3, tag_id: 1}, {job_id: 3, tag_id: 2}, {job_id: 3, tag_id: 3}
])
