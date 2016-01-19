json.array!(@companies) do |company|
  json.extract! company, :id, :name, :website, :sponsored
  json.url company_url(company, format: :json)
end
