#!/usr/bin/env python3
"""
Protocol Validation Hook for CTRepo Git Repositories

This script is called by Git hooks to validate protocol changes
before they are accepted into the repository.
"""

import sys
import yaml
import json
import jsonschema
from pathlib import Path

def validate_protocol_file(protocol_path: str) -> bool:
    """Validate a protocol YAML file against the schema."""
    try:
        # Load schema
        schema_path = Path("/opt/bastion/schemas/protocol.schema.json")
        with open(schema_path, 'r') as f:
            schema = json.load(f)
        
        # Load protocol
        with open(protocol_path, 'r') as f:
            protocol = yaml.safe_load(f)
        
        # Validate
        jsonschema.validate(protocol, schema)
        
        print(f"✓ Protocol validation passed for {protocol.get('meta', {}).get('id', 'unknown')}")
        return True
        
    except jsonschema.ValidationError as e:
        print(f"✗ Protocol validation error: {e.message}", file=sys.stderr)
        return False
    except Exception as e:
        print(f"✗ Validation failed: {e}", file=sys.stderr)
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: validate_protocol.py <protocol.yaml>", file=sys.stderr)
        sys.exit(1)
    
    protocol_path = sys.argv[1]
    
    if validate_protocol_file(protocol_path):
        sys.exit(0)  # Success
    else:
        sys.exit(1)  # Failure

if __name__ == "__main__":
    main()