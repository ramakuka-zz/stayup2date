Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :node, GraphQL::Relay::Node.field

  field :user, types.String do 
    resolve ->(obj,args,ctx) {
      "Should Be changed"
    }
  end
end
