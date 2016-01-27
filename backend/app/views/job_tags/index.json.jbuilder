json.array!(@job_tags) do |job_tag|
  json.extract! job_tag, :id, :job_id, :tag_id
  json.url job_tag_url(job_tag, format: :json)
end
