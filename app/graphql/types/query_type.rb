Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :node, GraphQL::Relay::Node.field

  field :root, types[Types::RootType] do
    description "High Level GraphQl Type"
    resolve ->(obj, args, ctx) {
      Root.all
    }
  end
end
