Types::RootType = GraphQL::ObjectType.define do
  name "RootType"
  implements GraphQL::Relay::Node.interface
  global_id_field :id


  field :name, types.String
end
