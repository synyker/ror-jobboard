json.array!(@jobs) do |job|
  json.extract! job, :id, :title, :company, :tags, :description, :begin, :end, :created_at
  json.url job_url(job, format: :json)
end
