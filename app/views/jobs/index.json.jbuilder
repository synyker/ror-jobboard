json.array!(@jobs) do |job|
  json.extract! job, :id, :title, :company_id, :description, :begin, :end
  json.url job_url(job, format: :json)
end
