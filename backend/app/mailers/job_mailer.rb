class JobMailer < ApplicationMailer
  default from: 'yritysvastaava@tko-aly.fi'

  def job_mail(job)
    @job = job
    subject = job.company.name + ': ' + job.title
    mail(to: 'jonne.airaksinen@gmail.com', subject: subject)

  end

end
